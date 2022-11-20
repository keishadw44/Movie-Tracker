import React, {useState, } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovieToWatchlist } from '../../actions';

 function Login() {
    const [ movieTitle, setMovieTitle ] = useState(null)
    const [ movieYear, setMovieYear ] = useState(null)
    const dispatch = useDispatch();
    const movieList = useSelector(state => state);

    const handleSubmit = (e) => {
      e.preventDefault()
       console.log(movieTitle);
       console.log(movieYear);
       
    const movieObject = {
         title: movieTitle,
         year: movieYear,
    }
   dispatch(addMovieToWatchlist(movieObject))
    
    }
  console.log(movieList);

  return <>

       <form id='form' className='form-group container'>
            <div className='d-flex flex-column'>
               <h2> Enter the movie name </h2> 
                 <div>
                    <input
                     className='form-control'
                     type="text"
                     name='movie'
                     id='movie'
                     placeholder='Enter the movie name'
                     required
                     onChange={(event) => setMovieTitle(event.target.value)}>
                     </input>
                 </div>

                 <h2> Enter the movie year </h2> 
                 <div>
                    <input
                     className='form-control'
                     type="text"
                     name='year'
                     id='year'
                     placeholder='Enter the movie year'
                     required
                     onChange={(event) => setMovieYear(event.target.value)}>

                     </input>
                     
                 </div>

            <button onClick={handleSubmit} type="submit" className='btn btn-primary' id="btn-submit" > Submit </button>
            <button>
               <Link to="./Favorites">Movie List</Link>
            </button>
           </div>
         </form>
     {/* <div>
       {movieList.map((movie) => {
         return(
         <div>
          <h2> Movie Title: {movie.name} </h2>
          <p> Movie year: {movie.year} </p>
         </div>  
        )
       })}
      </div> */}
        
     </>;
}
export default Login;