import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'


const Form = ({ currentId, setCurrentId }) => {
 
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const [postData, setPostData] = useState({
        user: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''

    })

    useEffect(() => {

        if(post) setPostData(post);
        
    }, [post])

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();

        if(currentId) {

            dispatch(updatePost(currentId, postData));

        } else {

            dispatch(createPost(postData));

        }
        
    }

    const clear = () => {
        
    }

  return (
    
        <div className="container absolute">
        
            <form autoComplete='off' noValidate className="form" onSubmit={handleSubmit}>
            
                <div className="form__container">
                
                    <input type="text" 
                           className="form__input" 
                           placeholder='User'
                           name='user'
                           value={postData.user}
                           onChange={(e) => setPostData({...postData, user: e.target.value})} />

                    <input type="text" 
                           className="form__input" 
                           placeholder='Post Title'
                           name='title'
                           value={postData.title}
                           onChange={(e) => setPostData({...postData, title: e.target.value})} />

                </div>

                <div className="form__container">
                
                    <textarea className='form__textarea' 
                              name="message" 
                              id="" 
                              cols="25" 
                              rows="5" 
                              placeholder='Post Message'
                              value={postData.message}
                              onChange={(e) => setPostData({...postData, message: e.target.value})}>
                    </textarea>

                </div>

                <div className="form__container">
                
                    <input type="text" 
                           className="form__input" 
                           placeholder='Tags'
                           value={postData.tags}
                           name='tags'
                           onChange={(e) => setPostData({...postData, tags: e.target.value})} />
                
                </div>

                <div className="form__container">
                
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => setPostData({...postData, selectedFile: base64})}
                    />
                
                </div>
                
                <div className="form__flex">

                    <input type="submit" className='submit'/>
                    <button className="submit" onClick={clear} >Clear</button>
                
                </div>
                
            </form>
        
        </div>

  )
}

export default Form