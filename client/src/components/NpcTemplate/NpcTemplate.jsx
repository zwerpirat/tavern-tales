import React from 'react';
import './style.css';

const NpcTemplate = ({ npc: { name, category, race, location, description, favorite} }) => {
    return (
        <div className='npc-template'>
            <button type="delete" className='button-edit'>edit</button>
            <button type="delete" className='button-delete'>delete</button>

            <div className='name-title'> <h3>{ name }</h3></div>
            <div className='npc-content'>
                <div className='npc-category'> Category: {category}</div>
                <br/>
                <div className='npc-race'> Race: {race}</div>
                <br/>
                <div className='npc-location'> Located at: {location}</div>
                <br/>
                <div className='npc-description'> Short Info: {description}</div>
                <br/>
                <div className='npc-favorite'> {favorite}</div>
            </div>

        </div>
    )
}
export default NpcTemplate;