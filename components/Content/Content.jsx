import React from 'react'
import Star from '../../assets/button.svg'
import ShareCard from '../ShareCard/ShareCard'
import {Post} from '../index'

function Content() {
    return (
        <div className='content'>
            <div className='content__heading'>
                <h1>Latest Tweets</h1>
                <Star/>
            </div>
            <div className='content__sharing'>
                <ShareCard/>
            </div>
            <div className='posts_container'>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default Content
