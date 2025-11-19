import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return <div style={{fontFamily: 'sans-serif', padding: 20}}>Hello from app</div>
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
}

export {};
