import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen z-20 aspect-video pt-[10%] pl-14 md:pl-2 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block pt-6 pb-6 text-lg w-1/4">{overview}</p>
      <div className="my-2 md:m-0"> 
        <button className=" bg-white py-2 md:py-4 hover:bg-opacity-80 text-black  p-4 px-12 text-lg opacity-50 rounded-lg">▶️ Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white  p-4 px-12 text-lg bg-opacity-50 rounded-lg hover:opacity-50">ℹ️ More Info</button>
      </div>
    </div>
  )
}
 
export default VideoTitle;
