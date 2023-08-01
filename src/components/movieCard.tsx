import React from 'react'

const MovieCard = ({movieData}:any) => {
  return (
        <div className="items-center justify-center ">
            <div className="h-40 w-36 bg-gradient-to-t from-green-400 to-black p-0.5 ">
                <img className='w-full h-full shadow object-cover' src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}/>
            </div>
        </div>
  )
}

export default MovieCard