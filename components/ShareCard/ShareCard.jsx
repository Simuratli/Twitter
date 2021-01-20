import React from 'react'
import Gif from '../../assets/shareCard/gif.svg'
import Image from '../../assets/shareCard/image.svg'
import Rating from '../../assets/shareCard/rating.svg'
import Smile from '../../assets/shareCard/smile.svg'
import Profile from '../../assets/profile-photo.svg'

function ShareCard() {
    return (
        <div className='share_card'>
            <div className='share_card_profile'>
                <Profile/>
            </div>
            <div className='share_card_items'>
                <p>
                    <span placeholder='What Happening?' className='textarea' role='textbox' contentEditable></span>
                </p>
                <div className='share_card_buttons'>
                    <div className='icon_buttons_container'>
                        <button className='icon_button'><Image/></button>
                        <button className='icon_button'><Gif/></button>
                        <button className='icon_button'><Rating/></button>
                        <button className='icon_button'><Smile/></button>
                    </div>
                    <div>
                        <button className='share_tweet_button'> Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareCard
