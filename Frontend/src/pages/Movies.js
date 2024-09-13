import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  return (
    <div className="movie-list bg-black text-white">
     
      <div className="body2 bg-black">

        {/* Static Section 1 */}
        <div className='list2 w-100 text-white'>
          <h3>Hot Right Now</h3>
          <div className='list2-inner d-flex w-100'>
            {/* First Row */}
            <div className='ms-4'>
              <Link to={`/MovieDetails/1`}>
                <img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1717266022960.jpg' alt='Movie 1' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/2`}>
                <img src='https://www.disneyphile.fr/wp-content/uploads/2021/11/spider-man-no-way-home-affiche-2.jpg' alt='Movie 2' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/3`}>
                <img src='https://media-cache.cinematerial.com/p/500x/dqlhfrii/the-walking-dead-movie-poster.jpg?v=1509133773' alt='Movie 3' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/4`}>
                <img src='https://picfiles.alphacoders.com/455/thumb-1920-455526.jpg' alt='Movie 4' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/5`}>
                <img src='https://sm.ign.com/ign_es/gallery/s/stranger-t/stranger-things-season-4-location-posters_br7s.jpg' alt='Movie 5' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/6`}>
                <img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/oppenheimer-3x4-1712046716651.jpg' alt='Movie 6' />
              </Link>
            </div>
          </div>
        </div>

        {/* Static Section 2 */}
        <div className='list2 w-100 text-white'>
          <h3>Best of Action</h3>
          <div className='list2-inner d-flex w-100'>
            {/* Second Row */}
            <div className='ms-4'>
              <Link to={`/MovieDetails/7`}>
                <img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1723555218732.jpg' alt='Movie 7' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/8`}>
                <img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/asur-2-3x4-1716903168539.jpg' alt='Movie 8' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/9`}>
                <img src='https://v3img.voot.com/resizeMedium,w_180,h_240/v3Storage/assets/fast-x-call-out-3x4-1700301916853.jpg' alt='Movie 9' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/10`}>
                <img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1725635858403.jpg' alt='Movie 10' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/11`}>
                <img src='https://m.media-amazon.com/images/M/MV5BMWRiOWUwYTYtYmZkMC00YjU0LWE1NmItNTUwYWJmZDE0MzgzXkEyXkFqcGc@._V1_.jpg' alt='Movie 11' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/12`}>
                <img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1718092065127.jpg' alt='Movie 12' />
              </Link>
            </div>
          </div>
        </div>

        {/* Static Section 3 */}
        <div className='list2 w-100 text-white'>
          <h3>Fan Favorites</h3>
          <div className='list2-inner d-flex w-100'>
            {/* Third Row */}
            <div className='ms-4'>
              <Link to={`/MovieDetails/13`}>
                <img src='https://m.media-amazon.com/images/M/MV5BMWM2YTY2MDgtNTZjYS00ZGUwLTkyMzEtYzJlNjhlZjBlZjgzXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg' alt='Movie 13' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/14`}>
                <img src='https://m.media-amazon.com/images/M/MV5BZTYxMThlYTEtMDE0Mi00OThiLWEyM2EtMzk5NjIzNDQ1Y2RkXkEyXkFqcGc@._V1_.jpg' alt='Movie 14' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/15`}>
                <img src='https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg' alt='Movie 15' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/16`}>
                <img src='https://image.tmdb.org/t/p/original/cmGBe9zR1Lxxn1GpaWibFn0EFPv.jpg' alt='Movie 16' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/17`}>
                <img src='https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg' alt='Movie 17' />
              </Link>
            </div>
            <div className='ms-4'>
              <Link to={`/MovieDetails/18`}>
                <img src='https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_FMjpg_UX1000_.jpg' alt='Movie 18' />
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MovieList;
