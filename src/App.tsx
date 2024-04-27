import Desktop from '@components/Desktop'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const zoomWheelEvent = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault()
      }
    }

    const keyZoomEvent = (e: KeyboardEvent) => {
      if (
        e.ctrlKey &&
        (e.key === '-' || e.key === '_' || e.key === '=' || e.key === '+')
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener('keydown', keyZoomEvent)
    document.addEventListener('wheel', zoomWheelEvent, { passive: false })

    return () => {
      document.removeEventListener('keydown', keyZoomEvent)
      document.removeEventListener('wheel', zoomWheelEvent)
    }
  }, [])

  return <Desktop />
}

export default App
