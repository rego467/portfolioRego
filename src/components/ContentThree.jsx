import React from 'react'

export const ContentThree = () => {

  const projects =[
    {
      id:"1",
      judul: "kalkulator",
      gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrcCf9YW7CfjSy6i5gp7OQKKk7JV-l_C2JFg&usqp=CAU",
      tahun:"2023",
      deskripsi:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      id:"2",
      judul: "todo",
      gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVown0QWidAh8q34HyzgxD_bLLy0A62HqaL811MTqxgcQfDL9tDN0fmuksPV9v9rRNsQs&usqp=CAU",
      tahun:"2023",
      deskripsi:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ]
  return (
    <div className='bg-red-100 mt-14'>
      <div className='container mx-auto bg-slate-500 p-2'>
        <div>
          <h2 className='font-Roboto font-bold text-lg'>Projects</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4'>
          {
            projects.map((item)=>{
              return(
                <div className='grid bg-white rounded-s-2xl' key={item.id}>
                  <div className='flex'>
                    <img src={item.gambar} alt="" width={140} className='rounded-s-2xl' />
                    <div className='mx-2'>
                      <h1 className='font-Roboto text-base font-semibold'>{item.judul}</h1>
                      <span className='font-Roboto'>{item.tahun}</span>
                      <p className='font-Roboto text-sm leading-relaxed'>{item.deskripsi}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
