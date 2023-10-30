import React from 'react'
import {FaInstagram} from "react-icons/fa6"
import {CiFacebook} from "react-icons/ci"
import {AiFillTwitterCircle} from "react-icons/ai"
import {TiSocialLinkedinCircular} from "react-icons/ti"

export const Footer = () => {
  return (
    <div className='bg-slate-100 mt-24'>
      <div className='container mx-auto p-3'>
        <div className=''>
          <div className='flex justify-center gap-3'>
            <FaInstagram size={30} className='text-red-500'/>
            <CiFacebook size={30} className='text-blue-400'/>
            <AiFillTwitterCircle size={30} className='text-blue-400'/>
            <TiSocialLinkedinCircular size={30} className='text-blue-400'/>
          </div>
          <div className='text-center mt-3'>
            <h3 className='text-base font-Roboto Slab font-bold'>Copyright ©2023 All rights reserved </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
