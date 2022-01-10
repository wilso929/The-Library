import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Nintendo.css'

const Nintendo = () => {
    return (
        <div>
            <div className='title'>
                <h1>Nintendo</h1>
            </div>
            <div className='Switch'>
                <Link to='/Switch' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                    <h1>Switch</h1>
                </Link>
            </div>  

            <div className='container'>
                <div className='WiiU' >
                        <Link to='/Wiiu' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                            <h1>Wii U</h1>
                        </Link>
                </div>  
                <div className='Wii'>
                    <Link to='/Wii' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                        <h1>Wii</h1>
                    </Link>
                </div>  

            </div>
            <div className='container'>
                <div className='Gamecube'>
                        <Link to='/Gamecube' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                            <h1>Gamecube</h1>
                        </Link>
                </div>  
                <div className='N64'>
                    <Link to='/N64' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                        <h1>N64</h1>
                    </Link>
                </div>  
            </div>
            <div className='container'>
                <div className='SNES'>
                        <Link to='/Snes' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                            <h1>SNES</h1>
                        </Link>
                </div>  
                <div className='NES'>
                    <Link to='/Nes' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                        <h1>NES</h1>
                    </Link>
                </div>  
            </div>
            <div className='container'>
                <div className='DS'>
                        <Link to='/Ds' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                            <h1>DS</h1>
                        </Link>
                </div>  
                <div className='GameBoy'>
                    <Link to='/Gameboy' style={{ textDecoration: 'none', color:"#1E90FF" }}>
                        <h1>Game Boy</h1>
                    </Link>
                </div>  
            </div>
        </div>
    )
}

export default Nintendo
