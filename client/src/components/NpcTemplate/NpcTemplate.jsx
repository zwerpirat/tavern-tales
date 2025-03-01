import React from 'react';
import './style.css';

const NpcTemplate = ({ npc, npcs, setNPCs }) => {

    const API_BASE_URL = 'http://localhost:3000/npc';

    const handleDeleteNPC = async () => {
        const deleteID = npc.id;
        const result = await fetch(API_BASE_URL + "/" + npc.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (result.ok) {
            console.log("Delete button clicked");
            const filteredNPCs = npcs.filter((npc) => npc.id !== deleteID);
            setNPCs(filteredNPCs);
        }
    }

    return (
        <div className='npc-template'>
            <button type="delete" className='button-delete' onClick={handleDeleteNPC}>delete</button>
            <button type="delete" className='button-edit'>edit</button>
            <button type="favorite" className='button-favorite'>❤️</button>

            <div className='name-title'> <h3>{npc.name}</h3></div>
            <div className='npc-content'>
                <div className='npc-category'> Category: {npc.category}</div>
                <br />
                <div className='npc-race'> Race: {npc.race}</div>
                <br />
                <div className='npc-location'> Located at: {npc.location}</div>
                <br />
                <div className='npc-description'> Short Info: {npc.description}</div>
                <br />
                <div className='npc-favorite'> {npc.favorite}</div>
            </div>

        </div>
    )
}
export default NpcTemplate;