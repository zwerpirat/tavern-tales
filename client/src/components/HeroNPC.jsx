import React from 'react';

const HeroNPCTemplate = ({name, location, description})=> {
    return (
        <div className='hero-template'>
            <div className='name-title'> <h3>NPC of the day! {name}</h3></div>
            <div className='npc-content'>
                <div className='npc-location'> Located at: {location}</div>
                <br />
                <div className='npc-description'> Totally our favorite because: {description}</div>
                <br />
            </div>
        </div>

    );
}
export default HeroNPCTemplate;