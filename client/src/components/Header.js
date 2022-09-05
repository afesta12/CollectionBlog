import React from 'react'

const Header = ({onFormAdd}) => {
  return (
    <header className='header'>
    
      <nav className="nav">
      
        <h1 className='header__title'>Collection Blog</h1>
        <span class="material-symbols-outlined" onClick={onFormAdd}>menu</span>

      </nav>
    
    </header>
  )
}

export default Header