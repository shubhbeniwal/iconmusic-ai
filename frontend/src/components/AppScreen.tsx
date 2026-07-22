"use client"

import { ReactNode } from "react"

type Props = {

  children: ReactNode

}

export default function AppScreen({

  children

}: Props) {

  return (

    <main
      className="
      relative
      min-h-screen
      text-white
      overflow-hidden
      bg-black
      pb-32
      "
    >

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        h-[500px]
        w-[500px]
        rounded-full
        bg-emerald-500/15
        blur-[140px]
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        top-40
        right-[-100px]
        h-72
        w-72
        rounded-full
        bg-purple-500/10
        blur-[120px]
        pointer-events-none
        "
      />

      <div
        className="
        max-w-md
        mx-auto
        px-6
        pt-10
        relative
        z-10
        "
      >

        {children}

      </div>

    </main>

  )

}