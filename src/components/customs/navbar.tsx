"use client"
import React from 'react'
import { ModeToggle } from './themeselector'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavContent } from '@/content/nav'
import NavLink from './navlink'
interface navprops {
    className?:string
}

const NavBar = (props:navprops) => {
    const pathname = usePathname()
    return (
    <div className={cn(`font-poppins bg-gray-500 text-white
      fixed z-20 flex top-0 items-center gap-4 justify-between w-full p-4
      {${pathname} === '/admin' ? 'hidden' : 'block'}
      `
    ,props.className)}>
      <h4 className='p-0 m-0'>
       Proowl
      </h4>
      <div className='flex gap-4 text-extraSmall uppercase'>
        {NavContent.navLinks.map(item => {
          return(<NavLink key={item.name} {...item} />)
        })}
      </div>
      <div className='text-black'>
        <ModeToggle />
      </div>
    </div>
  )
}

export default NavBar
