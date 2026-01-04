import { useEffect, useState } from "react"
import { motion, useMotionValue, animate } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface CounterProps {
  target: number
}

function Counter({ target }: CounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true })

  const count = useMotionValue<number>(1)
  const [displayCount, setDisplayCount] = useState<number>(1)

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayCount(Math.floor(latest))
    })

    return () => unsubscribe()
  }, [count])

  useEffect(() => {
    if (inView) {
      animate(count, target, {
        duration: 2,
        ease: "easeOut",
      })
    }
  }, [inView, target, count])

  return (
    <motion.h1 ref={ref} className="font-semibold lg:text-4xl text-2xl">
      {displayCount}
    </motion.h1>
  )
}

export default Counter
