import { useContext, useState } from "react";
import './style.css';

const NpcForm = ({ onAddNpc }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [race, setRace] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [favorite, setFavorite] = useState(false);

    const handleSubmit = async (npc) => {
        npc.preventDefault();
        const newNPC = {
            name: name,
            category: category,
            race: race,
            location: location,
            description: description,
            favorite: favorite
        };
        await onAddNpc(newNPC);
        setName('');
        setCategory('');
        setRace('');
        setLocation('');
        setDescription('');
        setFavorite(false);
    }

    return (
        <form onSubmit={handleSubmit} className="npc-form">
            <h2>Create a new NPC</h2>
            <div className="element-group">
                <label>Name</label>
                <input type="text" name="name" className="input-box" onChange={(InputNPC) => setName(InputNPC.target.value)} required placeholder="Give your buddy a name!"></input>
            </div>
            <div className="element-group">
                <label>Category</label>
                <select name="category" className="input-box" onChange={(InputNPC) => setCategory(InputNPC.target.value)} required placeholder="Select a category">
                <option value="select">Select a category</option>
                <option value="humanoid">Humanoid</option>
                <option value="monster">Monster</option>
                <option value="item">Item</option>
                <option value="city">City</option>
                <option value="creature">Creature</option>
                </select>

            </div>
            <div className="element-group">
                <label>Race</label>
                <input type="text" name="race" className="input-box" onChange={(InputNPC) => setRace(InputNPC.target.value)} required placeholder="Enter a race"></input>
            </div>
            <div className="element-group">
                <label>Location</label>
                <input type="text" name="location" className="input-box" onChange={(InputNPC) => setLocation(InputNPC.target.value)} required placeholder="Where did you meet your buddy?"></input>
            </div>
            <div className="element-group">
                <label>Description</label>
                <input type="text" name="description" className="input-box" onChange={(InputNPC) => setDescription(InputNPC.target.value)} required placeholder="Describe your buddy in a few words"></input>
            </div>
            <div className="element-group">
                <label>Favorite</label>
                <input type="text" name="favorite" className="input-box" onChange={(InputNPC) => setFavorite(InputNPC.target.value)} required placeholder="Add this NPC to your favorites!"></input>
            </div>

            <button type="submit">Create NPC</button>
        </form>

    );

}

export default NpcForm;