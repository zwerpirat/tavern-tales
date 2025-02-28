import { useState } from 'react';
import ttLogo from './assets/tt_bgp2.png';
import bgp from './assets/bgp.jpg';
import NpcTemplate from './components/NpcTemplate/NpcTemplate';
import NpcForm from './components/NpcForm/NpcForm';
import Search from './components/Search';

// API setting to localhost + get method
const API_BASE_URL = 'http://localhost:3000/npc';
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [npcs, setNPCs] = useState([]);
  // const [npcOfTheDay, setNPCOfTheDay] = useState({});

  return (
      <div className='body'>
        <header>
          <img src={ttLogo} />
          <h1> Welcome Adventurers!</h1>
        </header>
        <div className='navbar'>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <section>
          <h2>NPC of the day</h2>
          <ul>
            {/* <NpcTemplate npc={npcOfTheDay} /> */}
          </ul>
        </section>

        {/*showing all the npcs on click */}
        <div className='all-npcs'>
          <button onClick={() => setCount((count) => count + 1)}>
            Show all NPCs
          </button>
        </div>
      </div>
  )
}
export default App
