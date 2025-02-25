'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

interface searchprops {
    className?:string
}

const SearchBar = (props:searchprops) => {
  return (
    <div className={cn('mt-20',props.className)}>
      <div className=' flex gap-4 px-4'>
        <Input
            placeholder='enter a team or name of a player'
            className='w-full dark:bg-white dark:text-black'
            type="text"
        />
        <Button>search</Button>
      </div>
    </div>
  )
}

export default SearchBar
