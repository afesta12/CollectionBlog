import React from 'react'

const Post = () => {
  return (
    <div className='card'>
    
        <div className="card__image">

            <div className="card__image__container">
            
                <h2 className="card__user">Test Name</h2>
                <h3 className="card__date">2 Months Ago</h3>
            
            </div>

        </div>

        <div className="card__container">
        
            <div className="card__tags">#Test #Tag</div>
            <div className="card__title"><h4>Test Title for Styling</h4></div>
            <div className="card__message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque sit a laboriosam expedita voluptate!</div>

            <div className="card__flex">
            
                <div className="card__likes">10</div>
                <div className="card__delete">Delete</div>
            
            </div>
        
        </div>
    
    </div>
  )
}

export default Post