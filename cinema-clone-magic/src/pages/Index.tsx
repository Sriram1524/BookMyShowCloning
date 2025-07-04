
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'showing' | 'upcoming'>('showing');
  
  // Filter movies based on active tab
  const filteredMovies = movies.filter(movie => 
    activeTab === 'showing' ? !movie.isUpcoming : movie.isUpcoming
  );

  // Get featured movies
  const featuredMovies = movies.filter(movie => movie.isFeatured);
  
  return (
    <div className="min-h-screen bg-cinema-darkGray flex flex-col">
      <Navbar />
      
      <section className="relative">
        {featuredMovies.length > 0 && (
          <div className="relative h-[70vh] overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={featuredMovies[0].backdrop} 
                alt={featuredMovies[0].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-darkGray via-cinema-darkGray/80 to-transparent"></div>
            </div>
            
            <div className="container-custom relative z-10 flex flex-col justify-end h-full pb-16">
              <span className="text-cinema-red font-semibold mb-2">Featured Movie</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{featuredMovies[0].title}</h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {featuredMovies[0].genre.map((genre, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-full">
                    {genre}
                  </span>
                ))}
                <span className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-full">
                  {featuredMovies[0].duration}
                </span>
              </div>
              
              <p className="text-gray-300 max-w-2xl mb-8">{featuredMovies[0].synopsis.substring(0, 150)}...</p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={`/movie/${featuredMovies[0].id}`} 
                  className="button-primary flex items-center"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Book Tickets
                </Link>
                <a 
                  href={featuredMovies[0].trailer} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-transparent hover:bg-gray-800 text-white border border-gray-700 py-2 px-4 rounded flex items-center transition-colors"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Trailer
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
      
      <section className="py-16 container-custom">
        <div className="flex border-b border-gray-700 mb-8">
          <button 
            className={`pb-4 px-6 font-semibold ${
              activeTab === 'showing' 
                ? 'text-cinema-red border-b-2 border-cinema-red' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('showing')}
          >
            <span className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Now Showing
            </span>
          </button>
          <button 
            className={`pb-4 px-6 font-semibold ${
              activeTab === 'upcoming' 
                ? 'text-cinema-red border-b-2 border-cinema-red' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            <span className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Coming Soon
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No movies available in this category.</p>
          </div>
        )}
        
        <div className="mt-10 flex justify-center">
          <button className="button-primary">
            View All Movies
          </button>
        </div>
      </section>
      
      <section className="py-16 bg-cinema-gray">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cinema-red font-semibold mb-2">Special Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enjoy 20% off on your first booking</h2>
              <p className="text-gray-300 mb-8">
                Sign up now and get an exclusive discount on your first movie ticket purchase. 
                Valid for all movies and theaters.
              </p>
              <button className="button-primary">
                Sign Up Now
              </button>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Cinema Experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-darkGray to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
