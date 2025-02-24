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
      <div className='p-2 flex gap-8 px-8'>
        <Input
            className='w-full dark:bg-white dark:text-black'
            type="text"
        />
        <Button>search</Button>
      </div>
    </div>
  )
}

export default SearchBar
