import React from 'react'

function Main({data}) {
  return (
    
        <img className='w-full h-screen' src={data.hdurl} alt={data.title} />
  )
}

export default Main