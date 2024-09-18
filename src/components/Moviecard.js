import React from 'react'
import { IMG_CDN_url } from '../utils/constants'

const Moviecard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
     <img  src={IMG_CDN_url+posterPath} alt='moviecard'></img>


    </div>
  )
}

export default Moviecard