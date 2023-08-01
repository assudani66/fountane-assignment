import axios from "axios";

export default async function getMovieList() {
    const url = 'https://api.themoviedb.org/3/movie/popular';
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTHORIZATION_KEY}`
      }
    };
    try {
       const response = await axios.get(url, options)
        if(response.status === 200){
          return response.data.results
        }
    }catch(error){
        console.log(error)
    }
}
