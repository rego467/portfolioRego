import React from 'react'

export const ContentTwo = () => {

  const recent = [
    {
      judul: "Making a design system from scratch",
      tanggal: "12 Feb 2023",
      kategori: "Design, Pattern",
      deskripsi: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      judul: "Creating pixel perfect icons in Figma",
      tanggal: "12 mei 2023",
      kategori: "Figma, Icon Design",
      deskripsi: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      judul: "Creating pixel perfect icons in Figma",
      tanggal: "12 juni 2023",
      kategori: "Figma, Icon Design",
      deskripsi: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ]

  return (
    <div className='bg-blue-200 mt-14'>
      <div className='bg-blue-600 container mx-auto p-2'>
        <div className='flex justify-between'>
          <h2 className='text-lg font-Roboto text-white font-bold'>Recent Post</h2>
          <a href="" className='text-lg font-Roboto text-white font-bold'>View All</a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
            {
              recent.map(item =>{
                return (
                  <div key={item.tanggal} className='bg-white grid p-1 shadow-lg rounded-md'>
                    <h1 className='font-Roboto text-base font-semibold'>{item.judul}</h1>
                    <div className='bg-red-100 my-2'>
                      <span className='font-Roboto text-sm'>{item.tanggal}</span>
                      <span className='mx-3'>|</span>
                      <span className='font-Roboto text-sm'>{item.kategori}</span>
                    </div>
                    <p className='font-Roboto text-sm leading-relaxed'>{item.deskripsi}</p>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}
