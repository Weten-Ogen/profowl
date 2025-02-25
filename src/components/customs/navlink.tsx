'use client'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface navlinksprops {
    className?:string,
    name:string
    reff:string
}

const NavLink = (props:navlinksprops) => {
  return (
    <Link href={props.reff} className={cn('',props.className)}>
        {props.name}
    </Link>
  )
}

export default NavLink
