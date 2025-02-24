"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import VideoComp from '../videocomp'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface compprops{
    className?:string
}
const HeroSection = (props:compprops) => {
    const router = useRouter()
    const handleRouter = () => {
        router.push('/')
    }
    return (
    <div className={cn('',props.className)}>
        <div className='relative'>
            <VideoComp
            src={'/herovideo.mp4'}
            />
        
            <div className='absolute top-0 mt-32 flex flex-col z-10 items-center justify-center mt-30 '>
                <h2 className=' font-poppins mt-20 py-8 px-4 text-mediumFont max-w-lg uppercase text-black text-primary dark:text-white'>
                    We offer you the required data to make a better 
                    purchase for a player.
                </h2>
                <div className='w-full p-4'>
                <Button onClick={handleRouter} className='w-full '>Scout</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
