
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, Calendar, ArrowLeft, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShowtimeSelector from '../components/ShowtimeSelector';
import { movies, Movie } from '../data/movies';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  
  useEffect(() => {
    if (id) {
      const movieId = parseInt(id, 10);
      const foundMovie = movies.find(m => m.id === movieId);
      
      if (foundMovie) {
        setMovie(foundMovie);
      } else {
        navigate('/not-found');
      }
    }
  }, [id, navigate]);
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-cinema-darkGray flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-cinema-darkGray flex flex-col">
      <Navbar />
      
      <section className="relative pt-10 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={movie.backdrop} 
            alt={movie.title} 
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cinema-darkGray via-cinema-darkGray/90 to-cinema-darkGray/80"></div>
        </div>
        
        <div className="container-custom relative z-10 mt-6">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center text-white mb-8 hover:text-cinema-red transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Home
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-xl movie-card">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="mt-6">
                <a 
                  href={movie.trailer} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-primary w-full flex items-center justify-center"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Trailer
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {movie.rating > 0 && (
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-white">{movie.rating}/5</span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-1" />
                  <span className="text-white">{movie.duration}</span>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-1" />
                  <span className="text-white">
                    {new Date(movie.releaseDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genre.map((genre, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-full">
                    {genre}
                  </span>
                ))}
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Synopsis</h3>
                <p className="text-gray-300 leading-relaxed">{movie.synopsis}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Cast</h3>
                <p className="text-gray-300">{movie.cast.join(', ')}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Director</h3>
                <p className="text-gray-300">{movie.director}</p>
              </div>
              
              {!movie.isUpcoming && <ShowtimeSelector movie={movie} />}
              
              {movie.isUpcoming && (
                <div className="mt-6 bg-cinema-gray rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Coming Soon</h3>
                  <p className="text-gray-300 mb-4">
                    This movie is not yet released. Stay tuned for showtime information.
                  </p>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                    Set Reminder
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MovieDetails;
