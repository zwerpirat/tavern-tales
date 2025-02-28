import React from "react";
import searchIcon from '../assets/searchicon.png'

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            <div>
                <input
                className="search-bar"
                type="text"
                placeholder="Search through the vast world of NPCs!"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                img src={searchIcon} 
                />
            </div>
        </div>
    )
}

export default Search;