import React from 'react';
import { useEffect, useState } from 'react';

const HeroNPCTemplate = (base_url) => {
    const [npc, setNPC] = useState({});

    //rendering a random npc from DB when component is invoked
    const getRandomNPC = async () => {
        try {
            let result = await fetch(base_url.base_url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (result.ok) {
                const data = await result.json();
                setNPC(data[Math.floor(Math.random() * data.length)]);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getRandomNPC();
    }, [])


    return (
        <div className='hero-template'>
            <div className='name-title'><h3>NPC of the day! {npc.name}</h3></div>
            <div className='npc-content'>
                <br />
                {npc.image ? (
                    <div className='npc-image'><img src={"http://localhost:3000/uploads/" + npc.image} width="150px"></img></div>
                ) : (
                    <p><img src={"http://localhost:3000/uploads/npc_image.png"} width="150px"></img></p>
                )}
                <div className='npc-location'> Located at: {npc.location}</div>
                <br />
                <div className='npc-description'> Totally our favorite because: {npc.description}</div>
                <br />
            </div>
        </div>
    );
}
export default HeroNPCTemplate;