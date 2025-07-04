
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, className = '' }) => {
  return (
    <Link to={`/movie/${movie.id}`} className={`movie-card group ${className}`}>
      <div className="relative overflow-hidden">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="movie-card-img"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-lg mb-1">{movie.title}</h3>
          <div className="flex items-center mb-2">
            {movie.rating > 0 ? (
              <>
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm ml-1">{movie.rating}/5</span>
              </>
            ) : (
              <span className="text-yellow-400 text-sm">Coming Soon</span>
            )}
          </div>
          <p className="text-gray-300 text-sm">{movie.genre.join(', ')}</p>
        </div>
        
        {/* Release label for upcoming movies */}
        {movie.isUpcoming && (
          <div className="absolute top-2 right-2 bg-cinema-red text-white text-xs px-2 py-1 rounded">
            Coming Soon
          </div>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
