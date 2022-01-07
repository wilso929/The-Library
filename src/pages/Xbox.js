import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Xbox.css'
const Xbox = () => {
    return (
        <div>
            <div className='title'>
                <h1>The Library</h1>
            </div>
            <div className='One'>
                <Link to='/Nintendo' style={{ textDecoration: 'none' }}>
                    <h1>One</h1>
                </Link>
            </div>  

            <div className='container'>
                <div className='X360'>
                        <Link to='/PS' style={{ textDecoration: 'none' }}>
                            <h1>360</h1>
                        </Link>
                </div>  
                <div className='OG'>
                    <Link to='/Xbox' style={{ textDecoration: 'none' }}>
                        <h1>Original</h1>
                    </Link>
                </div>  

            </div>

        </div>
    )
}

export default Xbox
