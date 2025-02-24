"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import PlayerCard from './playercard'
interface playergridprops {
    className?:string,
}

const PlayerGrid = (props:playergridprops) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 items- lg:grid-cols-3 mt-20 gap-20 justify-center w-[80%]",props.className)}>
      {Array.from({length: 5}).map( (_, index:number) => {return (<div 
      className='' key={index}>
            <PlayerCard
            name="Julius Zenab"
            minutesPlayed="12000"
            club="RightToDreamFc"
            position="midfielder"
            nationality="Ghana"
            nationalityCap='0'
            clubCap='12000'
            playerImage='/hero.jpg'
            age='23'
            playerDescription='lorem ipsum text'
            />
        </div>)
        }
      )}
    </div>
  )
}

export default PlayerGrid
