import React from 'react'

function Sidebar({toggleSidebar, data}) {
  return (
    <div className='bg-slate-800/90 absolute top-0 right-0 w-5/6 px-5 py-10 h-screen z-10'>
        <h2 className='text-2xl font-bold'>{data.title} - <span className='text-xl'>{data.date}</span>
        </h2>
        <p>{data.explanation}</p>

        <button onClick={() => toggleSidebar()} className='absolute bottom-5 right-5 border-2 border-zinc-100 rounded-full w-10 w-10'>
        <i className="fa-solid fa-xmark"></i>
        </button>
    </div>

  )
}

export default Sidebar