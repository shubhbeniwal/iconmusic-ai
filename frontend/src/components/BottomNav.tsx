"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [

  {
    label: "Home",
    href: "/"
  },

  {
    label: "Library",
    href: "/library"
  },

  {
    label: "Insights",
    href: "/insights"
  },

  {
    label: "Me",
    href: "/me"
  }

]

export default function BottomNav() {

  const pathname = usePathname()

  return (

    <div className="fixed bottom-0 left-0 right-0 z-50">

      <div
        className="
        max-w-md
        mx-auto
        bg-black/60
        backdrop-blur-xl
        border-white/10
        border-t
        border-zinc-800
        "
      >

        <div
          className="
          grid
          grid-cols-4
          text-center
          py-4
          "
        >

          {

            navItems.map(

              (item) => {

                const active =

                  pathname === item.href

                return (

                  <Link

                    key={item.href}

                    href={item.href}

                  >

                    <motion.div

                      whileTap={{
                        scale: 0.9
                      }}

                      className={`
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-sm
                        transition-all
                        duration-300

                        ${
                          active

                          ? "text-emerald-400"

                          : "text-zinc-500"
                        }
                      `}
                    >

                      {item.label}

                    </motion.div>

                  </Link>

                )

              }

            )

          }

        </div>

      </div>

    </div>

  )

}