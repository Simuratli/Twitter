import '../styles/components/Navbar/Navbar.css';
import '../styles/components/Navbar/NavItem.css';
import '../styles/components/Content/Content.css';
import '../styles/components/Trends/Trends.css';
import '../styles/components/Post/Post.css';
import '../styles/main.css'
import '../styles/components/ShareCard/ShareCard.css'
import '../styles/components/ResponsiveNav/ResponsiveNav.css'
import {ResNav} from '../components'

import React from 'react'
import {Navbar ,Content,Trends} from '../components'
function Home() {
  return (
    <div className='main'> 
      <Navbar/>
      <ResNav/>
      <Content/>
      <Trends/>
    </div>
  )
}


export default Home
