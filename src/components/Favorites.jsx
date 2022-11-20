

import {useSelector, useDispatch} from 'react-redux';

function Favorites () {

    const dispatch = useDispatch();
    const movieList = useSelector(state => state);
  return (
    <div>
    {movieList.map((movie) => {
      return(
      <div>
       <h2> Movie Title: {movie.name} </h2>
       <p> Movie year: {movie.year} </p>
      </div>  
     )
    })}
   </div>
    );
}

export default Favorites;
