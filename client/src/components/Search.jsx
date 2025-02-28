import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
    <div className="search">
        <div>
            <img src="searchicon.png" alt="search"/>
            <input
            type="text"
            placeholder="Search through the vast world of NPCs!"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    </div>
}

export default Search;