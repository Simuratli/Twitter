import React from 'react'
import Home from '../../assets/ResponsiveNav/home.svg'
import Search from '../../assets/ResponsiveNav/search.svg'
import Message from '../../assets/ResponsiveNav/message.svg'
import Alert from '../../assets/ResponsiveNav/alert.svg'

function ResponsiveNav() {
    return (
        <div className='responsive_nav'>
            <div className='responsive_nav_item'>
                <a href='/'><Home/></a>
            </div>
            <div className='responsive_nav_item'>
                <a href='/'><Search/></a>
            </div>
            <div className='responsive_nav_item'>
                <a href='/'><Alert/></a>
            </div>
            <div className='responsive_nav_item'>
                <a href='/'><Message/></a>
            </div>
        </div>
    )
}

export default ResponsiveNav
