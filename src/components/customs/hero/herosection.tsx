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
    <div className={cn('relative font-poppins',props.className)}>
        <div className='absolute inset-0 '>
            <VideoComp
            src={'/herovideo.mp4'}
            />
        
            <div className='absolute top-0 mt-32 flex flex-col z-10 items-center justify-center mt-30 md:dark:bg-black/50 md:mx-4  md:text-white md:bg-black/50 rounded-lg '>
                <h2 className=' font-poppins mt-20 py-8 px-4 text-primaryFont md:text-white max-w-lg uppercase text-primary  font-bold'>
                    We offer you the required data to make a better 
                    purchase for a player.
                </h2>
                <p className='max-w-lg  text-primaryFont p-4 text-left'>We have data from the grassroots to the Ghana premier league . We give verified data and data that includes </p>
                <div className='w-full p-4'>
                <Button onClick={handleRouter} className='w-full '>Scout</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
