// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import css from './MovieDetails.module.css';
// import Cast from 'components/cast/Cast';
// import Reviews from 'components/reviews/Reviews'; // Add import for Reviews component

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState({});
//   const [showCast, setShowCast] = useState(false); // Add state for showing cast
//   const [showReviews, setShowReviews] = useState(false); // Add state for showing reviews

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}?api_key=de21efcc56a4ffd99e69f6f9f320b387`
//         );
//         setMovieDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching movie details:', error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   return (
//     <div className={css.movieDetailsContainer}>
//       <h1 className={css.movieTitle}>
//         {movieDetails.title || movieDetails.name}
//       </h1>
//       <div className={css.movieInfoContainer}>
//         <img
//           src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
//           alt={movieDetails.title || movieDetails.name}
//           className={css.moviePoster}
//         />
//         <div>
//           <p className={css.movieOverview}>{movieDetails.overview}</p>
//           <div className={css.filmData}>
//             <p>Release Date: {movieDetails.release_date}</p>
//             <p>Vote Average: {movieDetails.vote_average}</p>
//             <p>Vote Count: {movieDetails.vote_count}</p>
//           </div>
//         </div>
//       </div>

//       <div className={css.viewLinksContainer}>
//         {/* Toggle the state to show/hide the cast and reviews */}
//         <button onClick={() => setShowCast(!showCast)} className={css.viewLink}>
//           Cast
//         </button>
//         <button
//           onClick={() => setShowReviews(!showReviews)}
//           className={css.viewLink}
//         >
//           Reviews
//         </button>
//       </div>

//       {/* Render the Cast component only if showCast state is true */}
//       {showCast && <Cast movieId={movieId} />}

//       {/* Render the Reviews component only if showReviews state is true */}
//       {showReviews && <Reviews movieId={movieId} />}
//     </div>
//   );
// };

// export default MovieDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieDetails.module.css';
import Cast from 'components/cast/Cast';
import Reviews from 'components/reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=de21efcc56a4ffd99e69f6f9f320b387`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleCastClick = () => {
    setShowCast(true);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowCast(false);
    setShowReviews(true);
  };

  return (
    <div className={css.movieDetailsContainer}>
      <h1 className={css.movieTitle}>
        {movieDetails.title || movieDetails.name}
      </h1>
      <div className={css.movieInfoContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
          alt={movieDetails.title || movieDetails.name}
          className={css.moviePoster}
        />
        <div>
          <p className={css.movieOverview}>{movieDetails.overview}</p>
          <div className={css.filmData}>
            <p>Release Date: {movieDetails.release_date}</p>
            <p>Vote Average: {movieDetails.vote_average}</p>
            <p>Vote Count: {movieDetails.vote_count}</p>
          </div>
        </div>
      </div>

      <div className={css.viewLinksContainer}>
        {/* Toggle the state to show/hide the cast and reviews */}
        <button onClick={handleCastClick} className={css.viewLink}>
          Cast
        </button>
        <button onClick={handleReviewsClick} className={css.viewLink}>
          Reviews
        </button>
      </div>

      {/* Render the Cast component only if showCast state is true */}
      {showCast && <Cast movieId={movieId} />}

      {/* Render the Reviews component only if showReviews state is true */}
      {showReviews && <Reviews movieId={movieId} />}
    </div>
  );
};

export default MovieDetails;
