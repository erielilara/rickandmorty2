import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <header>
      <div id='sticky-header' className='menu-area transparent-header'>
        <div className='container custom-container'>
          <div className='row'>
            <div className='col-12'>

              <nav className='menu-nav show'>
                <div className='logo'>
                  <Logo>
                    <a href='/'> <img src='/images/rickymortylogo.jpg' alt='Rick and Morty logo' /></a>
                  </Logo>
                </div>
                <div className='navbar-wrap main-menu'>
                  <ul className='navigation'>
                    <li className='menu-item-has-children'><a href='/'>Home</a>
                    </li>
                    <li className='menu-item-has-children'><a href='/characters'>CHARACTERS</a>
                    </li>
                    <li><a href='/locations'>LOCATIONS</a></li>
                    <li><a href='/episodes'>EPISODES</a></li>
                    <li className='menu-item-has-children'><a href='/last'>LAST SEEN</a></li>
                  </ul>
                </div>
                <div className='header-action d-none d-md-block'>
                  <ul>
                    <li className='header-btn'><a href='/about' className='btn'>VALIENTA</a></li>
                  </ul>
                </div>
              </nav>
            </div>

          </div>

        </div>
      </div>

    </header>
  )
}

const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px; 
max-height: 70px; 
font-size: 0; 
display: inline-block; 
img {
  display: block;
  width: 100%;
  border-radius: 40px;
}
`
export default Header
