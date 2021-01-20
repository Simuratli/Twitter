import React from 'react'
import Logo from '../../assets/twitter.svg'
import NavItem from './NavItem'
import Home from '../../assets/home.svg'
import Hashtag from '../../assets/hashtag.svg'
import BookMark from '../../assets/bookmark.svg'
import List from '../../assets/lists.svg'
import Messages from '../../assets/messages.svg'
import More from '../../assets/more.svg'
import Profile from '../../assets/profile.svg'
import ProfileImage from '../../assets/profile-photo.svg'
import Arrow from '../../assets/arrow-bottom.svg'
import Tvt from '../../assets/tvt.svg'

function Navbar() {
    return (
        <nav  className='navbar'>
            <div className='fixed'>
            <div className='navbar--center'>
            <div className='navbar__logo'>
                <Logo/>
            </div>
            <ul  className='navbar__list'>
                    <NavItem text="Home">
                        <Home/>
                    </NavItem>
                    <NavItem text="Explore">
                        <Hashtag/>
                    </NavItem>
                    <NavItem text="Notification">
                        <Home/>
                    </NavItem>
                    <NavItem text="Messages">
                        <Messages/>
                    </NavItem>
                    <NavItem text="Bookmarks">
                        <BookMark/>
                    </NavItem>
                    <NavItem text="Lists">
                        <List/>
                    </NavItem>
                    <NavItem text="Profile">
                        <Profile/>
                    </NavItem>
                    <NavItem text="More">
                        <More/>
                    </NavItem>
                </ul>
                <button className='navbar__tweet'>Tweet</button>
                <button className=' sm'><Tvt/></button>
                <div className='navbar__profile'>
                   <ProfileImage/>
                   <div className='navbar__profile__name'>
                        <p>Eljan Simuratli</p>
                        <p className='nick'>@simuratli</p>
                   </div>
                   <Arrow className='arr'/>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar

