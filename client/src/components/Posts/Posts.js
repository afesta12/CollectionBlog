import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'

const Posts = ({setCurrentId}) => {

  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div className='container'>
    
        <div className="container__posts">
        
            {posts.map((post) => (

              <Post key={ post._id } post={post} setCurrentId={setCurrentId} />

            ))}
        
        </div>
    
    </div>
  )
}

export default Posts