/* eslint-disable prettier/prettier */

import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
export const MovieContext =  createContext();

export function MovieContextProvider({children}){
 const [movies,setMovies] =  useState([])
 const [popularMovies,setPopularMovies] =  useState([])
 const [searchResults,setSearchResults] = useState([])
 useEffect(()=>{
getMovies();
getPopularMovies();
},[])

    function getMovies(){
        axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=date_added&order_by=asc&limit=40')
        .then(response =>{
         setMovies(response.data.data.movies) 
        })
        .catch(error=>{
          alert(error)
        })
   }

   function getPopularMovies(){
    axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=download_count&query_term=2021&order_by=desc&limit=40')
    .then(response =>{
     setPopularMovies(response.data.data.movies) 
    })
    .catch(error=>{
      alert(error)
    })
   }

   function searchMovies(search_term){
     axios.get('https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=date_added&order_by=desc&query_term='+search_term)
     .then((response)=>{
        setSearchResults(response.data.data.movies);
   
     }).catch(error =>{
       alert(error)
     })
   }

    return (
    <MovieContext.Provider
    value={{
movies,
popularMovies,
searchMovies,
searchResults
    }}>
        {children}
    </MovieContext.Provider>
        )
    }