import React from 'react'

const Form = () => {
  return (
    
        <div className="container absolute">
        
            <form action="" className="form">
            
                <div className="form__container">
                
                    <input type="text" className="form__input" placeholder='User' />
                    <input type="text" className="form__input" placeholder='Post Title' />

                </div>

                <div className="form__container">
                
                    <textarea className='form__textarea' name="" id="" cols="25" rows="5" placeholder='Post Message'></textarea>

                </div>

                <div className="form__container">
                
                    <input type="text" className="form__input" placeholder='Tags' />
                
                </div>

                <div className="form__container">
                
                    <input type="file" className="form__input" />
                
                </div>
                
                <input type="submit" className='submit'/>
            </form>
        
        </div>

  )
}

export default Form