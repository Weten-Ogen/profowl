import { cn } from '@/lib/utils'
import React from 'react'
import { DialogTrigger,Dialog,DialogClose,DialogContent,DialogTitle, DialogDescription
 } from '../ui/dialog'
import Image from 'next/image'

interface showmoreprops {
    className?:string,
    details: palyerCardprops,
}

const ShowMorePlyerInfo = (props:showmoreprops) => {
  return (
    <div className={cn('',props.className)}>
        <Dialog>
            <DialogTrigger>more info</DialogTrigger>
            <DialogContent className='min-h-screen'>
                <div className='max-w-full h-[40vh] overflow-hidden object-contain'>
                    <Image
                    src={props.details.playerImage}
                    alt={props.details.name}
                    width={500}
                    height={500}
                    className='w-full h-auto object-cover'
                    />
                </div>
                <div className='w-full flex justify-between'>
                <DialogTitle>{props.details.name}</DialogTitle>
                <DialogDescription>{props.details.nationality}</DialogDescription>

                </div>
                <div className=' flex flex-col gap-4 font-poppins '>
                    <div className='flex  gap-8 justify-between'>
                        <p className=''>age</p>
                        <p className=''>    
                            {props.details.age}
                        </p>
                    </div>
                    <div className='flex justify-between '>
                        <p>position</p>
                        <p>{props.details.position}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>club</p>
                        <p>{props.details.club}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>minute played</p>
                        <p>{props.details.minutesPlayed} mins</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>club caps</p>
                        <p>{props.details.clubCap} mins</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>country cap</p>
                        <p>{props.details.nationalityCap} mins</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>description</p>
                        <p>{props.details.playerDescription}</p>
                    </div>
                </div>
                <div>
                    <DialogClose/>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default ShowMorePlyerInfo
