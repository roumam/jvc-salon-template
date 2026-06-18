import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Thin wrapper around gsap.context() for scoped animations.
 * Automatically reverts all animations on unmount.
 *
 * @param {(context: gsap.Context) => void} setupFn  - runs inside gsap.context
 * @param {React.DependencyList} deps                 - re-runs when deps change
 * @returns {React.RefObject}                          - attach to the root element
 */
export function useGSAP(setupFn, deps = []) {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return

    const ctx = gsap.context(setupFn, rootRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return rootRef
}
