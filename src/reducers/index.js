export const watchListReducer = (state = [], action) => {
  switch(action.type){
    case "Add_Movie_To_Watchlist": {
        return [...state,
            {
                name: action.payload.title,
                year: action.payload.year,
                isWatched: action.payload.isWatched
            }
        ]
    }

    case "Update_Is_Watched_Status": {
return [...state,
   {
    name: action.payload.title,
    year: action.payload.year,
    isWatchedstatus: action.payload.isWatchedstatus
   }
]}

    
    default:
        return state;
  }
}