"use client"
import React from 'react'
import { useQuery } from 'react-query'
import getMovieList from '../../services/movie_services'
import MovieCard from '@/components/movieCard'
import NavBar from '@/components/navBar'
import { NextSeo } from 'next-seo'
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
            <div>
              <NextSeo
                title='Jet Protocol movies'
                description="Decentralized lending and borrowing built on the Solana blockchain."
              />
              <div className='sticky top-0 z-20 -p-20'>
                <NavBar currentScreen='MOVIESLIST'/>
              </div>
              <div className='flex w-full place-items-center justify-center items-center'>
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 w-6/12 place-items-center	'>
                      {data.map((movieData:any)=>
                          <div className='col-span-1'>
                            <MovieCard movieData={movieData} key={movieData.id}/>
                          </div>
                      )}
                  </div>
              </div>
            </div>
          )
      }
}

export default page
