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
        console.log(data)
          return data.map((movieData:any)=><MovieCard movieData={movieData} key={movieData.id}/>)
      }
}

export default page
