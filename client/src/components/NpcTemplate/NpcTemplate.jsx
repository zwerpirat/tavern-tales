import React from 'react';

const NpcTemplate = ({ npc: { name, category, race, location, description, favorite} }) => {
    return (
        <div className='npc-template'>

            <div className='name-title'> <h3>{ name }</h3></div>
            <div className='npc-content'>
                <div className='npc-category'> {category}</div>
                <br/>
                <div className='npc-race'> {race}</div>
                <br/>
                <div className='npc-location'> {location}</div>
                <br/>
                <div className='npc-description'> {description}</div>
                <br/>
                <div className='npc-favorite'> {favorite}</div>
            </div>

        </div>
    )
}
export default NpcTemplate;