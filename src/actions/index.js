

export const addMovieToWatchlist = (movieObject) => {
  return{
    type: "Add_Movie_To_Watchlist",
    payload: movieObject
  }
}