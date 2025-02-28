import { useState, useEffect } from 'react';
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
  const [npcs, setNPCs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Failed to catch the NPCs.')
      }
      const data = await response.json();
      setNPCs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='body'>
      <header className='header-image'>
        <img src={ttLogo} />
        <h1> Welcome Adventurers!</h1>
      </header>
      <div className='navbar'>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <section>
        <h2>NPC of the day</h2>
        <ul>
          {npcs.length > 0 ? (
            npcs.map(npc => (
              npc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              npc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
              npc.location.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                <NpcTemplate npc={npc} key={npc.id} />
              ):(
                <p key={npc.id}></p>
              )
            ))
          ):(
            <p>No found</p>
          )}
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
