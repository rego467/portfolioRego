import React from 'react'
import rego from "../assets/rego.jpg"
import { PiWhatsappLogoDuotone } from "react-icons/pi"

export const ContentOne = () => {
  return (
    <div className='container mx-auto p-2 mt-6'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        <div className='justify-center grid order-first lg:order-last items-center'>
          <img src={rego} alt="rego edwar" width={180} className='w-[180px] lg:w-[250px]' />
        </div>

        <div className='grid justify-center mt-4'>
          <h1 className='text-center text-3xl font-Roboto leading-normal'>Hi, I am Rego, <br/>Frontend <br/> Developer</h1>
          <p className='text-lg font-Roboto text-center mt-7 leading-relaxed'>  
            Saya adalah seorang pengembang junior yang bersemangat, siap untuk belajar dan berkontribusi 
            dalam membangun aplikasi yang inovatif. Saya memiliki keinginan yang kuat untuk terus 
            meningkatkan keterampilan pemrograman saya dan memecahkan tantangan teknis dengan solusi yang kreatif.
          </p>
          <div className='grid justify-center mt-7'>
            <div className='text-center flex bg-blue-600 w-[250px] rounded-md p-1 items-center justify-center cursor-pointer'>
              <a className='text-xl' href='https://wa.me/6285771717274' target='_blank' rel='noopener noreferrer'>Contact me </a>  
              <PiWhatsappLogoDuotone size={29} className='flex ml-2 text-green-400'/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
