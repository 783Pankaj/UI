import React from 'react'
import HeaderNav from '../header/Header'

const Home = () => {
    return (
        <div>
        
            <div>
                <HeaderNav />
            </div>
            <div className='split left'>
                <div className='centered'>
                <p>welcome</p>
                        <h1>We Are The MERN Developer </h1>
                </div>
            </div>
        </div>
    )
}

export default Home