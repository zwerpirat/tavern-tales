import { useState } from 'react'
import ttLogo from './assets/tt_bgp.png'
import bgp from './assets/bgp.jpg'
import './App.css'


// API setting to localhost + get method
const API_BASE_URL = 'http://localhost:3000/npc';
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.dndbeyond.com/" target="_blank">
          <h1><img src={ttLogo} className="logo" alt="hero-image" /></h1>
        </a>
      </div>
      <h1>Welcome Adventurers!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Monsters slayed: {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the image to be redirected to DnDBeyond
      </p>
    </>
  )
}

export default App
