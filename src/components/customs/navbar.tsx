"use client"
import React from 'react'
import { ModeToggle } from './themeselector'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
interface navprops {
    className?:string
}

const NavBar = (props:navprops) => {
    const pathname = usePathname()
    return (
    <div className={cn(`
      fixed z-20 flex top-0 justify-between w-full p-4
      {${pathname} === '/admin' ? 'hidden' : 'block'}
      `
    ,props.className)}>
      <h4 className='p-0 m-0'>
       Proowl
      </h4>
      <ModeToggle/>
    </div>
  )
}

export default NavBar
