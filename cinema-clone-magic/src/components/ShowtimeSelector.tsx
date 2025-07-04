
import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { theaters, Theater, Screen, Showtime } from '../data/theaters';
import { Movie } from '../data/movies';
import { Link } from 'react-router-dom';

interface ShowtimeSelectorProps {
  movie: Movie;
}

const ShowtimeSelector: React.FC<ShowtimeSelectorProps> = ({ movie }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTheaterId, setSelectedTheaterId] = useState<number | null>(theaters[0]?.id || null);

  // Get today and the next 6 days for date selection
  const getDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayOfMonth: date.getDate(),
      });
    }
    
    return dates;
  };

  const dates = getDates();

  // Filter theaters showing this movie on the selected date
  const getAvailableTheaters = () => {
    return theaters.filter(theater => 
      theater.screens.some(screen => 
        screen.showtimes.some(
          showtime => showtime.movieId === movie.id && showtime.date === selectedDate
        )
      )
    );
  };

  const availableTheaters = getAvailableTheaters();
  
  // Get showtimes for the selected theater and date
  const getShowtimesByTheater = (theaterId: number) => {
    const theater = theaters.find(t => t.id === theaterId);
    if (!theater) return [];
    
    const showtimesByScreen: { screenId: number, screenName: string, showtimes: Showtime[] }[] = [];
    
    theater.screens.forEach(screen => {
      const filteredShowtimes = screen.showtimes.filter(
        showtime => showtime.movieId === movie.id && showtime.date === selectedDate
      );
      
      if (filteredShowtimes.length > 0) {
        showtimesByScreen.push({
          screenId: screen.id,
          screenName: screen.name,
          showtimes: filteredShowtimes
        });
      }
    });
    
    return showtimesByScreen;
  };

  return (
    <div className="bg-cinema-gray rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-semibold mb-6 text-white">Book Tickets</h3>
      
      {/* Date Selection */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 mr-2 text-cinema-red" />
          <h4 className="text-lg font-medium text-white">Select Date</h4>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {dates.map((dateObj) => (
            <button
              key={dateObj.date}
              onClick={() => setSelectedDate(dateObj.date)}
              className={`p-2 rounded-lg flex flex-col items-center transition-colors ${
                selectedDate === dateObj.date
                  ? 'bg-cinema-red text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-sm">{dateObj.day}</span>
              <span className="text-lg font-semibold">{dateObj.dayOfMonth}</span>
            </button>
          ))}
        </div>
      </div>

      {availableTheaters.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          No showtimes available for this date. Please select another date.
        </div>
      ) : (
        <>
          {/* Theater Selection */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 mr-2 text-cinema-red" />
              <h4 className="text-lg font-medium text-white">Select Theater</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableTheaters.map((theater) => (
                <button
                  key={theater.id}
                  onClick={() => setSelectedTheaterId(theater.id)}
                  className={`p-4 rounded-lg transition-colors text-left ${
                    selectedTheaterId === theater.id
                      ? 'bg-cinema-red text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <h5 className="font-medium">{theater.name}</h5>
                  <p className="text-sm opacity-80">{theater.location}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Showtimes */}
          {selectedTheaterId && (
            <div>
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2 text-cinema-red" />
                <h4 className="text-lg font-medium text-white">Select Showtime</h4>
              </div>
              
              {getShowtimesByTheater(selectedTheaterId).map((screenShowtimes) => (
                <div key={screenShowtimes.screenId} className="mb-6">
                  <h5 className="text-md font-medium text-gray-300 mb-3">{screenShowtimes.screenName}</h5>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {screenShowtimes.showtimes.map((showtime) => (
                      <Link
                        key={showtime.id}
                        to={`/seats/${movie.id}/${selectedTheaterId}/${screenShowtimes.screenId}/${showtime.id}`}
                        className="bg-gray-800 text-center py-2 px-3 rounded-md hover:bg-cinema-red text-white transition-colors"
                      >
                        {showtime.time}
                        <div className="text-xs text-gray-400">${showtime.price}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShowtimeSelector;
