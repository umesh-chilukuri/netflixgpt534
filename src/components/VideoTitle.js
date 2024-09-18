import React from 'react'

const VideoTitle = ({title,overview}) => {

 
 

    return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black"> 
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
          <div className="">
            <button className="text-black text-lg p-4  px-12  bg-white rounded-lg   hover:bg-opacity-80">Play</button>
            <button className="text-black mx-2 text-lg p-4 px-12 bg-gray-500 rounded-lg bg-opacity-50">MoreInfo</button>
          </div>
          </div>
  )
}

export default VideoTitle