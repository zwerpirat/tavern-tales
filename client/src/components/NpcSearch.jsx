import React from "react";

const NpcSearch = ({search:{}}) => {
    return ( 
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

    )

}

export default NpcSearch;
