import React from 'react'
import { useState } from 'react'
import { navLinks } from '../constants'
import { menuicon,closemenu, logo, cart, avatar } from '../assets/'

const Navbar = () => {
    const[toggle, setToggle] = useState(true)
    const[active, setActive] = useState('Collection')

  return (
    <nav className='w-full flex py-6 items-center justify-between'>
        <div className='flex items-center gap-5 justify-start'>
            <div className='sm:hidden flex flex-1'>
                <img src={toggle ? menuicon : closemenu} alt='Menu' className='object-contain h-[20px]'
                    onClick={() => setToggle(!toggle)} 
                />

                <div className={`${toggle ? 'hidden' : 'flex'} min-w-[250px] mx-4 my-20 absolute top-0 bg-primary left-0`}>
                    <ul className='list-none flex-col py-3 px-3'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                    className={`${active === nav.title ? "font-inter text-white font-bold" : "text-dimWhite" } font-inter hover:bg-white p-5 hover:text-primary text-xl w-[100%]`}
                                    onClick={() => setActive(nav.title)}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <img src={logo} className='w-[] h-[23px]'/>
        </div>




        <div className='flex items-center gap-5 justify-end'>
            <img src={cart} className='w-[30px] h-[30px]' />
            <div className='border-2 border-primary rounded-full '>
                <img src={avatar} className='w-[40px] h-[40px] border-primary' />
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar