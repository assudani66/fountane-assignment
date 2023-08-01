"use client"
import React from 'react'
import { useQuery } from 'react-query'
import getMovieList from '../../services/movie_services'
import MovieCard from '@/components/movieCard'

const page = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: getMovieList,
      })
      
      if(isLoading) {
        return <span>loading</span>
      }
      if(isError){
        return <span>error in fetching data</span>
      }
      if(data){
          return (
            <div className='flex w-full place-items-center justify-center items-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 w-6/12 place-items-center	'>
                    {data.map((movieData:any)=>
                        <div className='col-span-1 '>
                            <MovieCard movieData={movieData} key={movieData.id}/>
                        </div>
                    )}
                </div>
            </div>
          )
      }
}

export default page
