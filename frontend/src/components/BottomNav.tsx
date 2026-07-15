import { motion } from "framer-motion"

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0">

      <div className="max-w-md mx-auto bg-black/60 backdrop-blur-xl border-white/10 border-t border-zinc-800">

        <div className="grid grid-cols-3 text-center py-4">

          <motion.button

            whileTap={{
              scale: 0.9
            }}

          >

            Home

          </motion.button>

          <motion.button

            whileTap={{
              scale: 0.9
            }}

          >

            Discover

          </motion.button>

          <motion.button

            whileTap={{
              scale: 0.9
            }}

          >

            Me

          </motion.button>

        </div>

      </div>

    </div>
  )
}