import React from 'react'

const VideoTitle = ({title , description}) => {
  return (
    <div className=' md:w-screen aspect-video pt-[38%] md:pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-lg md:text-5xl font-bold'>{title}</h1>
        <p className=' hidden md:inline-block w-1/4 py-6 text-lg font-semibold'>{description}</p>
        <div >
            <button className='bg-white font-bold text-black py-2 md:p-4 px-4 md:px-12 md:text-lg rounded-md  text-sm  hover:bg-opacity-80'> ▷ Play</button>
            <button className='hidden md:inline-block bg-black text-white p-4 px-12 text-xl  rounded-md mx-2'> ⓘ More info</button>
        </div>
    </div>
  )
}

export default VideoTitle