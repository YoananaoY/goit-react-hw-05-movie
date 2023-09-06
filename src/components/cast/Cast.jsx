import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=de21efcc56a4ffd99e69f6f9f320b387`
        );
        setCastData(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast data:', error);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <ul>
        {castData.map(actor => (
          <li key={actor.id} className={css.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className={css.actorImage}
            />
            <p className={css.actorName}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Definiowanie PropTypes dla komponentu Cast
Cast.propTypes = {
  movieId: PropTypes.string.isRequired, // movieId powinien być wymagany i być typu string
};

export default Cast;
