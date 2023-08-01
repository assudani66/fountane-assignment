import React from 'react'

const page = async() => {
        const url = 'https://api.themoviedb.org/3/movie/popular';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_AUTHORIZATION_KEY}`
          }
        };
        
        fetch(url, options)
          .then(res => res.json())
          .then(json => console.log(json,'thisIsReponse'))
          .catch(err => console.error('error:' + err));

  return (
    <div>page</div>
  )
}

export default page
