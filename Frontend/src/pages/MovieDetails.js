import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';  // Import the CSS file

const MovieDetails = () => {
  const { movie_id } = useParams();  // Extract the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details by movie_id from the backend API
    fetch(`http://localhost:5000/api/movies/${movie_id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [movie_id]);

  if (!movie) return <div className="loading">Loading...</div>;  // Show loading until the data is fetched

  return (
    <div className="movie-details bg-black text-white">
      <div className="movie-image-container">
        <img src={movie.Image} alt={movie.Name} className="movie-image" />
      </div>
      <h2>{movie.Name}</h2>
      <p><strong>About:</strong> {movie.About}</p>
      <p><strong>Cast:</strong> {movie.Cast}</p>
      <p><strong>Rating:</strong> {movie.Rating}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
      <img src={movie.Logo} alt={`${movie.Name} Logo`} className="movie-logo" />
    </div>
  );
};

export default MovieDetails;
