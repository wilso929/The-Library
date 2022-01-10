import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/PS.css'

const PS = () => {
    return (
        <div>
            <div className='title'>
                <h1>Play Station</h1>
            </div>
            <div className='PS5'>
                <Link to='/Nintendo' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                    <h1>PS5</h1>
                </Link>
            </div>  

            <div className='container'>
                <div className='PS4' >
                        <Link to='/PS' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                            <h1>PS4</h1>
                        </Link>
                </div>  
                <div className='PS3'>
                    <Link to='/Xbox' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                        <h1>PS3</h1>
                    </Link>
                </div>  

            </div>
            <div className='container'>
                <div className='PS2'>
                        <Link to='/PS' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                            <h1>PS2</h1>
                        </Link>
                </div>  
                <div className='PS1'>
                    <Link to='PS1' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                        <h1>PS1</h1>
                    </Link>
                </div>  
            </div>
        </div>
    )
}

export default PS
