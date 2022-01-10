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
                <Link to='/Nintendo' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                    <h1>Nintendo</h1>
                </Link>
            </div>  

            <div className='container'>
                <div className='PS'>
                        <Link to='/PS' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                            <h1>Play Station</h1>
                        </Link>
                </div>  
                <div className='Xbox'>
                    <Link to='/Xbox' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                        <h1>Xbox</h1>
                    </Link>
                </div>  

            </div>

        </div>
    )
}

export default Home
