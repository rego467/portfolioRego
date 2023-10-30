import React, { useState } from 'react'
import {RxHamburgerMenu} from "react-icons/rx"
import { Link } from 'react-router-dom'

export const Navbars = () => {
  const [burger, setBurger] = useState(false)
  const [aktif,setAktif] = useState(false)
  const tombolKlick = ()=>{
    setBurger(!burger)
  }

  const klikA =(params)=>{
    setAktif(params)
  }
  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto p-4'>
        <div className='flex flex-col lg:flex'>
          <div className='flex justify-end'>
            <RxHamburgerMenu size={29} color='' className='lg:hidden cursor-pointer text-blue-800' onClick={tombolKlick} />
          </div>

          <div className={`${burger ? "block" :"hidden"} bg-slate-50 md:bg-slate-100 rounded-md flex transition delay-300 duration-700 ease-in-out lg:block`}>
            <ul className='flex flex-col p-4 gap-2 md:gap-4 lg:flex lg:flex-row lg:justify-end transition delay-300 duration-700 ease-in-out '>
              <li className='text-xl font-bold'>
                <Link  className={`${aktif === "project" ? "bg-blue-500 p-1 rounded-md text-white" : null} flex font-Roboto text-blue-600` } onClick={()=>klikA("project")}>Project</Link>
              </li>
              <li className='text-xl font-bold'>
                <Link  className={`${aktif === "blog" ? "bg-blue-500 p-1 rounded-md text-white" : null} flex font-Roboto text-blue-600` } onClick={()=>klikA("blog")}>Blog</Link>
              </li>
              <li className='text-xl font-bold'>
              <Link  className={`${aktif === "contact" ? "bg-blue-500 p-1 rounded-md text-white" : null} flex font-Roboto text-blue-600` } onClick={()=>klikA("contact")}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
