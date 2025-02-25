'use client'
import { cn } from '@/lib/utils'
import React from 'react'

interface videocomprops {
    className?:string,
    src:string,

}
const VideoComp = (props:videocomprops) => {
  return (
    <div className={cn('-z-10 w-full overflow-hidden h-screen max-w-full  ',props.className)}>
      <video width="100%" autoPlay muted loop className='w-full object-cover '>
        <source 
            src={props.src}
            type="video/mp4"
        />
          Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoComp
