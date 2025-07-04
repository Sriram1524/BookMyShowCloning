
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { movies, Movie } from '../data/movies';
import { theaters, Theater, Screen, Showtime } from '../data/theaters';
import { toast } from '../components/ui/use-toast';

interface SeatSelectionParams {
  movieId: string;
  theaterId: string;
  screenId: string;
  showtimeId: string;
}

const SeatSelection = () => {
  const { movieId, theaterId, screenId, showtimeId } = useParams<SeatSelectionParams>();
  const navigate = useNavigate();
  
  const [movie, setMovie] = useState<Movie | null>(null);
  const [theater, setTheater] = useState<Theater | null>(null);
  const [screen, setScreen] = useState<Screen | null>(null);
  const [showtime, setShowtime] = useState<Showtime | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (movieId && theaterId && screenId && showtimeId) {
      const mId = parseInt(movieId, 10);
      const tId = parseInt(theaterId, 10);
      const scrId = parseInt(screenId, 10);
      const shId = parseInt(showtimeId, 10);
      
      const foundMovie = movies.find(m => m.id === mId);
      const foundTheater = theaters.find(t => t.id === tId);
      const foundScreen = foundTheater?.screens.find(s => s.id === scrId);
      const foundShowtime = foundScreen?.showtimes.find(s => s.id === shId);
      
      if (foundMovie && foundTheater && foundScreen && foundShowtime) {
        setMovie(foundMovie);
        setTheater(foundTheater);
        setScreen(foundScreen);
        setShowtime(foundShowtime);
      } else {
        navigate('/not-found');
      }
      
      setLoading(false);
    }
  }, [movieId, theaterId, screenId, showtimeId, navigate]);
  
  const handleSeatClick = (seatId: string) => {
    if (screen?.seats.reserved.includes(seatId)) return;
    
    setSelectedSeats(prevSelectedSeats => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter(seat => seat !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  const getSeatStatus = (row: number, col: number) => {
    const rowLetter = String.fromCharCode(65 + row); // A, B, C, etc.
    const seatId = `${rowLetter}${col}`;
    
    if (screen?.seats.reserved.includes(seatId)) {
      return 'reserved';
    }
    
    if (selectedSeats.includes(seatId)) {
      return 'selected';
    }
    
    return 'available';
  };

  const generateSeats = () => {
    if (!screen) return null;
    
    const rows = [];
    
    for (let i = 0; i < screen.seats.rows; i++) {
      const rowLetter = String.fromCharCode(65 + i); // A, B, C, etc.
      const cols = [];
      
      for (let j = 1; j <= screen.seats.columns; j++) {
        const seatId = `${rowLetter}${j}`;
        const seatStatus = getSeatStatus(i, j);
        
        cols.push(
          <div 
            key={seatId}
            className={`seat seat-${seatStatus}`}
            onClick={() => handleSeatClick(seatId)}
          >
            {seatStatus === 'selected' ? <Check className="h-4 w-4" /> : j}
          </div>
        );
      }
      
      rows.push(
        <div key={rowLetter} className="flex items-center mb-2">
          <div className="w-6 flex items-center justify-center text-gray-400 mr-2">
            {rowLetter}
          </div>
          <div className="flex flex-wrap">
            {cols}
          </div>
        </div>
      );
    }
    
    return rows;
  };

  const handleProceedToCheckout = () => {
    if (selectedSeats.length === 0) {
      toast({
        title: "No seats selected",
        description: "Please select at least one seat to continue.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Booking Successful!",
      description: `You have booked ${selectedSeats.length} seats for ${movie?.title}.`,
      variant: "default"
    });
    
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-cinema-darkGray flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-cinema-darkGray flex flex-col">
      <Navbar />
      
      <section className="py-12 container-custom">
        <Link 
          to={`/movie/${movie?.id}`} 
          className="flex items-center text-white mb-8 hover:text-cinema-red transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back to Movie Details
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seat Selection */}
          <div className="lg:col-span-2 bg-cinema-gray rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-6">Select Your Seats</h1>
            
            <div className="mb-8">
              <div className="w-full bg-cinema-darkGray rounded-lg p-4 text-center mb-8">
                <p className="text-gray-300 text-sm">SCREEN</p>
              </div>
              
              <div className="flex justify-center mb-10">
                {generateSeats()}
              </div>
              
              <div className="flex justify-center gap-8 text-sm">
                <div className="flex items-center">
                  <div className="seat seat-available w-6 h-6 mr-2"></div>
                  <span className="text-gray-300">Available</span>
                </div>
                <div className="flex items-center">
                  <div className="seat seat-selected w-6 h-6 mr-2">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-gray-300">Selected</span>
                </div>
                <div className="flex items-center">
                  <div className="seat seat-reserved w-6 h-6 mr-2"></div>
                  <span className="text-gray-300">Reserved</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1 bg-cinema-gray rounded-lg p-6 shadow-lg self-start">
            <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
            
            <div className="border-t border-b border-gray-700 py-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Movie:</span>
                <span className="text-white font-medium">{movie?.title}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Theater:</span>
                <span className="text-white font-medium">{theater?.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Screen:</span>
                <span className="text-white font-medium">{screen?.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Date:</span>
                <span className="text-white font-medium">
                  {showtime?.date && new Date(showtime.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Time:</span>
                <span className="text-white font-medium">{showtime?.time}</span>
              </div>
            </div>
            
            <div className="border-b border-gray-700 py-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Selected Seats:</span>
                <span className="text-white font-medium">
                  {selectedSeats.length > 0 ? selectedSeats.sort().join(', ') : 'None'}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Price per Ticket:</span>
                <span className="text-white font-medium">${showtime?.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Number of Tickets:</span>
                <span className="text-white font-medium">{selectedSeats.length}</span>
              </div>
            </div>
            
            <div className="py-2">
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold">Total:</span>
                <span className="text-cinema-red font-bold text-xl">
                  ${(selectedSeats.length * (showtime?.price || 0)).toFixed(2)}
                </span>
              </div>
            </div>
            
            <button 
              onClick={handleProceedToCheckout}
              className={`w-full mt-6 ${
                selectedSeats.length > 0
                  ? 'button-primary'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed py-2 px-4 rounded'
              }`}
              disabled={selectedSeats.length === 0}
            >
              Proceed to Checkout
            </button>
            
            <p className="text-gray-400 text-xs mt-4 text-center">
              * By proceeding, you agree to our Terms of Service and Booking Policy.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SeatSelection;
