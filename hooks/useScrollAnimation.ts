import { useEffect, useRef } from 'react'
import { useInView, useAnimation, useTransform, useScroll } from 'framer-motion'

export const useScrollAnimation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-20%" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return { ref, controls, isInView }
}

export const useParallax = (offset: number = 50) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])
  
  return { ref, y, opacity }
}