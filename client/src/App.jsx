import { useState, useEffect } from 'react';
import ttLogo from './assets/tt_bgp2.png';
import bgp from './assets/bgp.jpg';
import NpcTemplate from './components/NpcTemplate/NpcTemplate';
import NpcForm from './components/NpcForm/NpcForm';
import Search from './components/Search';
import bob from './assets/bob.png';
import HeroNPCTemplate from './components/HeroNPC';

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
  const [isVisible, setIsVisible] = useState(false)


  // creating an NPC
  const handleCreateNPC = async (formData) => {
    const result = await fetch(API_BASE_URL, {
      method: 'POST',
      body: formData
    });
    if (result.ok) {
      const npc = await result.json();
      npcs.push(npc);
    }

  }

  const fetchData = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Failed to catch the NPCs.')
      }
      const data = await response.json();
      setNPCs(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = async () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='body'>
      <header className='header'>
        <img src={ttLogo} />
        <h1> Welcome Adventurers!</h1>
      </header>

      <div className='navbar'>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className='hero-npc'>
        <img src={bob} />
        <HeroNPCTemplate base_url={API_BASE_URL} />
      </div>

      {/*showing all the npcs on click */}
      <div className='all-npcs'>
        <button className="button-show-all" onClick={handleClick}>Show all NPCs</button>
        {isVisible &&
          <section className=''>
            {npcs.length > 0 ? (
              npcs.map(npc => (
                npc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  npc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  npc.location.toLowerCase().includes(searchTerm.toLowerCase()) ? (

                  /* NpcTemplate(data[0], data, callbackfunctiontosetdata); */ 
                  <NpcTemplate npc={npc} key={npc.id} npcs={npcs} setNPCs={setNPCs} />
                ) : (
                  <p key={npc.id}></p>
                )
              ))
            ) : (
              <p>Not found</p>
            )}
          </section>}
      </div>

      <div className='create-npc-form'>
        <NpcForm onAddNpc={handleCreateNPC} />
      </div>

    </div>
  )
}
export default App
