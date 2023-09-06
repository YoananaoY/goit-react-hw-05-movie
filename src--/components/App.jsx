import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'; // Import Navigate
import Navigation from 'components/navigation/Navigation';

const Home = React.lazy(() => import('pages/home/Home'));
const Movies = React.lazy(() => import('pages/movies/Movies'));
const MovieDetails = React.lazy(() =>
  import('pages/moviedetails/MovieDetails')
);
const Cast = React.lazy(() => import('components/cast/Cast'));
const Reviews = React.lazy(() => import('components/reviews/Reviews'));

export const App = () => {
  return (
    <Router basename="/goit-react-hw-05-movie/">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Use Navigate */}
        </Routes>
      </Suspense>
    </Router>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
