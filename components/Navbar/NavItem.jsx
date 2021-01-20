import React from 'react'

function NavItem(props) {
    return (
       <li className='navbar__item'>
          <div className='list__container'>
            <div className='list__icon'>
                {props.children}
            </div>
            <div className='list__title'>
                {props.text}
            </div>
          </div>
       </li>
    )
}

export default NavItem
