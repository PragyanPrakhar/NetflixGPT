import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen z-20 aspect-video pt-[10%] px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="pt-6 pb-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white hover:bg-opacity-80 text-black  p-4 px-12 text-lg opacity-50 rounded-lg">▶️ Play</button>
        <button className="mx-2 bg-gray-500 text-white  p-4 px-12 text-lg bg-opacity-50 rounded-lg hover:opacity-50">ℹ️ More Info</button>
      </div>
    </div>
  )
}
 
export default VideoTitle;
