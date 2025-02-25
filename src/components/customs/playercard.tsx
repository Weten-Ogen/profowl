'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import ShowMorePlyerInfo from './showmoreplayer'

const PlayerCard = (props:palyerCardprops) => {
  
  return (
    <div className={cn('w-full',props.className)}>
      <div className='w-full max-w-full'>
        <Card>
            <CardContent className='w-full max-w-full'>
            <div className='max-w-full h-auto'>
                <Image
                    alt={props.name}
                    src={props.playerImage}
                    width={500}
                    height={500}
                    className='max-w-full h-auto'
                    />
            </div>
            <CardTitle className='text-primaryFont p-4'>
                {props.name}
            </CardTitle>
            <div className='m-y-5'>
                <CardDescription className='p-4 text-primaryFont'>
                    {props.playerDescription}
                </CardDescription>
                <div className='w-full flex gap-8 p-4 '>
                    <ShowMorePlyerInfo
                    details={...props}
                    />
                    <Button>whatsapp</Button>
                </div>
            </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PlayerCard
