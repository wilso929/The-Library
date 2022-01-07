import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Home.css'

const Home = () => {
    return (
        <div>
            <div className='title'>
                <h1>The Library</h1>
            </div>
            <div className='Nin'>
                <Link to='/Nintendo'>
                    <h1>Nintendo</h1>
                </Link>
            </div>  

            <div className='container'>
                <div className='PS'>
                        <Link to='/PS'>
                            <h1>Play Staion</h1>
                        </Link>
                </div>  
                <div className='Xbox'>
                    <Link to='/Xbox'>
                        <h1>Xbox</h1>
                    </Link>
                </div>  

            </div>

        </div>
    )
}

export default Home
