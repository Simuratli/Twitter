import React from 'react'
import Profile from '../../assets/profile-photo.svg'
import ShareImage from '../../assets/shareImage.svg'
import Icon from '../../assets/post/icon.svg'
import Like from '../../assets/post/like.svg'
import Retweet from '../../assets/post/retweet.svg'
import Share from '../../assets/post/share.svg'
import Image from 'next/image'

function Post() {
    return (
        <div className='post'>
            <div className='post_profile'>
               <Image src='/pp.jpg' alt='piv' width={50} height={50}/>
            </div>
            <div className='post_content'>
                <h1 className='post_profile_name'>Eljan Simuratli <span className='post_profile_nick'>@simuratli</span></h1>
                <p className='post_profile_text'>Tam girişimci olucam çocuk ağlıyor.</p>
                <div className='post_image'>
                    <ShareImage/>
                </div>
                <div className='post_butons'>
                    <div className='post_button'><span><Icon/></span>32</div>
                    <div className='post_button rtwt'><span className='retweet'><Retweet/></span>343</div>
                    <div className='post_button lke'><span className='like'><Like/></span>654</div>
                    <div className='post_button'><span><Share/></span></div>
                </div>
            </div>
        </div>
    )
}

export default Post
