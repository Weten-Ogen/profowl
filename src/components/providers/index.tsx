"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import NavBar from "../customs/navbar"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>
    <>
    <NavBar />
    <div>
        {children}
    </div>
    </>
    </NextThemesProvider>
}
