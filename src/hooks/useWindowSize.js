import { useState, useEffect } from "react"

export default function useWindowSize() {
  function getSize() {
    if (typeof window === "undefined") {
      return {
        width: "100vw",
        height: "100vh",
      }
    } else {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)

    return () => window.addEventListener("resize", handleResize)
  }, [])

  return windowSize
}
