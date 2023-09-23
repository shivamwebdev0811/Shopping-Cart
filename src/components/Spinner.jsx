import React from 'react'
import './progress.css'
const Spinner = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='progress'></div>
        <h1 className='text-gray-700 font-bold text-lg'>Loading...</h1>
    </div>
  )
}

export default Spinner