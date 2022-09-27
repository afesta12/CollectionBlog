import React from 'react'
import moment from 'moment'

const Post = ({ post, setCurrentId }) => {

  return (
    <div className='card'>

        <div className="card__image" style ={ 
            { backgroundImage: `url('${post.selectedFile}')` } } >

            <div className="card__image__container">

                <div className='card__flex'>
                
                    <h2 className="card__user">{ post.user }</h2>
                    <span class="material-symbols-outlined" onClick={() => setCurrentId(post._id)}>more_horiz</span>
                
                </div>
                <h3 className="card__date">{ moment(post.createdAt).fromNow() }</h3>
            
            </div>

        </div>

        <div className="card__container">
        
            <div className="card__tags">{ post.tags.map((tag) => `#${tag} `) }</div>
            <div className="card__title"><h4>{ post.title }</h4></div>
            <div className="card__message">{ post.message }</div>

            <div className="card__flex">
            
                <div className="card__likes">{ post.likeCount }</div>
                <div className="card__delete">Delete</div>
            
            </div>
        
        </div>
    
    </div>
  )
}

export default Post