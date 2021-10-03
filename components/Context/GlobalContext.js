/* eslint-disable prettier/prettier */

import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
import {auth} from '../../firebase'
export const GlobalContext =  createContext();

export function GlobalContextProvider({children}){
 const [movies,setMovies] =  useState([])
 const [popularMovies,setPopularMovies] =  useState([])
 const [searchResults,setSearchResults] = useState([])
 const [ userProfile , setUserProfile] = useState(null)
 const [imageUri,setImageUri]= useState("")
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

//Authentication Methods
const login = async(email,password)=>{
  auth.
  signInWithEmailAndPassword(email,password)
  .then((userCredential)=>{
      if(userCredential){
          setUserProfile(userCredential.user)
          // checkAdmin(userCredential)
          // toast.success(`Logged in as ${userCredential.user.displayName}`,{
          //     position: toast.POSITION.TOP_RIGHT
          // })
      }
  }).catch(error=>{
      // toast.error(error.message, {
      //     position: toast.POSITION.BOTTOM_CENTER
      //   });
  })
  
}

const signup = async(username,email,password)=>{
  auth.createUserWithEmailAndPassword(email,password)
  .then(userCredential=>{
      if(userCredential){
          userCredential.user.updateProfile({
              displayName: username,
          })
          // toast.success(`Account created succesfully`,{
          //     position: toast.POSITION.TOP_RIGHT
          // })
          setUserProfile(userCredential.user)
         
      }
      
  }).catch(error=>{
      
      // toast.error(error.message, {
      //     position: toast.POSITION.BOTTOM_CENTER
      //   });
  })
} 


const loginWithGoogle = async()=>{
  const provider = await new firebase.default.auth.GoogleAuthProvider()
  
  auth.signInWithPopup(provider)
  .then((userCredential)=>{
      if(userCredential){
          setUserProfile(userCredential.user)
          // checkAdmin(userCredential);
          // toast.success(`Logged in as ${userCredential.user.displayName}`,{
          //     position: toast.POSITION.TOP_RIGHT
          // })
      }
    
  })
  .catch(error=>{
  
      // toast.error(error.message, {
      //     position: toast.POSITION.BOTTOM_CENTER
      //   });
  })
}

const loginWithFacebook = async()=>{
  const provider  = await new firebase.default.auth.FacebookAuthProvider();

  auth.signInWithPopup(provider)
  .then(userCredential=>{
      if(userCredential){
          setUserProfile(userCredential.user)
          // toast.success(`Logged in as ${userCredential.user.displayName}`,{
          //     position: toast.POSITION.TOP_RIGHT
          // })
      }
  })
  .catch(error=>{
      // toast.error(error.message, {
      //     position: toast.POSITION.TOP_LEFT
      //   });
  })
}

const loginWithTwitter = async()=>{
  const provider = await new firebase.default.auth.TwitterAuthProvider()
  auth.signInWithPopup(provider)
  .then((userCredential)=>{
      if(userCredential){
          setUserProfile(userCredential.user)

          // toast.success(`Logged in as ${userCredential.user.displayName}`)
      }
      
  })
  .catch(error=>{
      // toast.error(error.message, {
      //     position: toast.POSITION.BOTTOM_CENTER
      //   });
  })

}

const verifyEmail = async(email)=>{
  
  auth.currentUser.sendEmailVerification()
      .then(() => {
        
          
     
       
          alert("send")
      }).catch(error => alert(error.message))

  // auth.sendVerificationLink(email)
  // auth.currentUser.sendEmailVerification(email)
  // .then(result=>{
  //     toast.success("Email has been sent succesfully...", {
  //         position: toast.POSITION.TOP_CENTER
  //       });
  // })
  // .catch(error=>{
  //     toast.error(error.message, {
  //         position: toast.POSITION.BOTTOM_CENTER
  //       });
  // })

}




const resetPassword = async(email)=>{
  auth.sendPasswordResetEmail(email)
  .then(()=>{
     
      // toast.success("Reset link has been sent to your email...", {
      //     position: toast.POSITION.TOP_CENTER
      //   });
  })
  .catch(error=>{
      // toast.error(error.message, {
      //     position: toast.POSITION.BOTTOM_CENTER
      //   });
  })
  
}

const logout = async () => {
  auth.signOut()
  setUserProfile(null)

}

    return (
    <GlobalContext.Provider
    value={{
      login,
      logout,
      loginWithTwitter,
      loginWithFacebook,
      loginWithGoogle,
      signup,
      verifyEmail,
      resetPassword,
      imageUri,
      setImageUri,
      userProfile,
      movies,
      popularMovies,
      searchMovies,
      searchResults
    }}>
        {children}
    </GlobalContext.Provider>
        )
    }