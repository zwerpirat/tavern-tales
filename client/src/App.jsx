import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ttLogo from './assets/tt_bgp.png'
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
          <img src={ttLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Tavern Tales</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
