import { useState } from 'react'
import ttLogo from './assets/tt_bgp.png'
import bgp from './assets/bgp.jpg'
import './App.css'
import NpcTemplate from './components/NpcTemplate'


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
      <div className='body'>
        <div className='herobar'>
          <a href="https://www.dndbeyond.com/">
            <img src={ttLogo} className="hero-image" />
          </a>
        </div>
        <h1>Welcome Adventurers!</h1>

        <section>
          <h2>NPC of the day</h2>
          <ul>
            {NpcTemplate}
          </ul>
        </section>
        
        {/*showing all the npcs on click */}
        <div className='all-npcs'>
          <button onClick={() => setCount((count) => count + 1)}>
            Show all NPCs
          </button>
        </div>

        <p className="read-the-docs">
          Click on the image to be redirected to DnDBeyond
        </p>
      </div>
    </>
  )
}

export default App
