import { useState, useEffect } from 'react'
import NBAApp from './nba-archetypes.jsx'

// Simple client-side router - no library needed
export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Pass the current path to the main app
  // /admin shows full app, anything else shows public view only
  return <NBAApp initialPath={path} />
}
