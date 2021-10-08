/* eslint-disable prettier/prettier */

import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
import {auth,db} from '../../firebase'
import * as firebase from 'firebase';
export const GlobalContext =  createContext();

export function GlobalContextProvider({children}){
 const [movies,setMovies] =  useState([])
 const [popularMovies,setPopularMovies] =  useState([])
 const [searchResults,setSearchResults] = useState([])
 const [ userProfile , setUserProfile] = useState(null)
 const [imageUri,setImageUri]= useState("")
 const [image,setImage] = useState("")
 const  [posts,setPosts] = useState([])
 const [loggedIn, setLoggedIn] = useState(false)
 const [openModal,setModal] = useState(false)
 
 
 useEffect(()=>{
getMovies();
getPopularMovies();
getPosts()
checkAuth()
},[])



const checkAuth = ()=>{
  auth.onAuthStateChanged(user=>{
    if(user){
      setLoggedIn(true)
      setUserProfile(user)
      
    }
  })
}


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
  //  displayName,
  //  photoUrl,
  //  message,
  //  image
   const addPost = (newPost)=>{

     if(userProfile !== null){
      db.collection('posts').add({
        // displayName:userProfile.displayName,
        // // photoUrl:userProfile.photoURL,
        // photoUrl:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/2020-04-11-12-17-19-014_2_vc7tRp3.jpg',
        // message: newPost.message,
        // image:newPost.image,
        user: {
          displayName:userProfile.displayName,
          // photoURL:userProfile.photoURL
          photoURL:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/2020-04-11-12-17-19-014_2_vc7tRp3.jpg'
      },
      message: newPost.message,
      photo: newPost.image,
      createdAt: firebase.default.firestore.FieldValue.serverTimestamp()
      })
      
      
     }
      
 
   }

   const getPosts = async () =>{
    db.collection("posts")
    .orderBy("createdAt","desc")
    .onSnapshot((snapShot)=>{
     let data = snapShot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
      setPosts(data)
    })
  }

  const toggleModal = ()=>{
    setModal(!openModal)
  }

   


//Authentication Methods
const login = async(email,password,navigation)=>{
  auth.
  signInWithEmailAndPassword(email,password)
  .then((userCredential)=>{
      if(userCredential){
          setUserProfile(userCredential.user)
          
          navigation.push('Main')
          setLoggedIn(true)
          
          // checkAdmin(userCredential)
          // toast.success(`Logged in as ${userCredential.user.displayName}`,{
          //     position: toast.POSITION.TOP_RIGHT
          // })
      }
  }).catch(error=>{
    alert(error.message)
      // toast.error(error.message, {
      //     position: toast.POSITION.BOTTOM_CENTER
      //   });
  })
  console.log("DOnee")
}

const signup = async(username,email,password,navigation)=>{
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
          navigation.push('Login')
      }
      
  }).catch(error=>{
    alert(error.message)
      
      // toast.error(error.message, {
      //     position: toast.POSITION.BOTTOM_CENTER
      //   });
  })
} 


const loginWithGoogle = async()=>{
  const provider =  new firebase.default.auth.GoogleAuthProvider()
  
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
  alert(error.message)
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
      image,
      toggleModal,
      setImage,
      userProfile,
      movies,
      addPost,
      popularMovies,
      searchMovies,
      searchResults,
      posts,
      loggedIn,
      openModal,
      
    }}>
        {children}
    </GlobalContext.Provider>
        )
    }