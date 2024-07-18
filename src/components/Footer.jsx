import React from 'react'

function Footer({toggleSidebar, data}) {
  return (
    <div className='flex justify-between px-5 py-2 fixed bottom-0 left-0 w-full  bg-slate-800/40'>
        <div>
        <h2 className='text-2xl font-bold'>
            {data.title} - {data.copyright}
        </h2>
        <h1 className='text-xl'>APOD Project</h1>
        </div>

        <button onClick={() => toggleSidebar()} className='absolute bottom-5 right-5 '>
        <i className="fa-solid fa-circle-info"></i>
        </button>
    </div>
  )
}

export default Footer