import React, { useState } from 'react'
import PostContext from './PostContext';

const PostState = ({children}) => {
    const [postProduct,setPostProduct]= useState([]);

    const movieFilter = (id) =>{
      setPostProduct((prev)=>[...prev,id])
    }

  return (
    <PostContext.Provider value={{postProduct,movieFilter}}>
        {children}
    </PostContext.Provider>
  )
}

export default PostState