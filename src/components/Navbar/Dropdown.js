import { useState } from 'react'
import './Dropdown.css';



const Dropdown = ( { MenuItems }) => {
    const [click, setClick] =  useState(false)
    const handelClick = () =>setClick(!click)


    return (
        <div>
            <ul onClick={handelClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                            <h3 className='dropdown-link'>
                                {item.title}
                            </h3>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Dropdown
