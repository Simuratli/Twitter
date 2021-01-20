import React from 'react'
import Search from '../../assets/search.svg'
import Options from '../../assets/options.svg'
import Icon from '../../assets/arrow-bottom.svg'

function Trends() {
    return (
        <div className='trends'>
            <div className='search'>
                <form>
                    <label className='search_container'>
                    <button><Search/></button>
                    <input placeholder='Search Twitter'/>
                    </label>
                </form>
            </div>
            <div className='trends_today'>
                <div className='trends_today_head bg-gray'>
                    <h1>Trends for you</h1>
                    <Options/>
                </div>
                <div className='trend_today_item bg-gray'>
                    <div className='tt_top'>
                        <p>Trending in Turkey</p>
                        <Icon/>
                    </div>
                    <div className='tt'>
                        Fransa'da 15,5
                    </div>
                    <div className='tt_bottom'>
                        8,130 Tweets
                    </div>
                </div>
                <div className='trend_today_item bg-gray'>
                    <div className='tt_top'>
                        <p>Trending in Turkey</p>
                        <Icon/>
                    </div>
                    <div className='tt'>
                        Fransa'da 15,5
                    </div>
                    <div className='tt_bottom'>
                        8,130 Tweets
                    </div>
                </div>
                <div className='trend_today_item bg-gray'>
                    <div className='tt_top'>
                        <p>Trending in Turkey</p>
                        <Icon/>
                    </div>
                    <div className='tt'>
                        Fransa'da 15,5
                    </div>
                    <div className='tt_bottom'>
                        8,130 Tweets
                    </div>
                </div>
                <div className='trend_today_item bg-gray'>
                    <div className='tt_top'>
                        <p>Trending in Turkey</p>
                        <Icon/>
                    </div>
                    <div className='tt'>
                        Fransa'da 15,5
                    </div>
                    <div className='tt_bottom'>
                        8,130 Tweets
                    </div>
                </div>
                <div className='trend_bottom bg-gray'>
                    <a href='/'>Show More</a>
                </div>
            </div>
        </div>
    )
}

export default Trends
