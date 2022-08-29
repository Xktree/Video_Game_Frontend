import React, { useState } from "react";
// import './Searchbar.css';
import SearchResults from '../SearchResults/SearchResults';

const Searchbar = ({videoGames}) => {

    const [search, setSearch] = useState('');
    const [searchParameters, setSearchParameters] = useState([]);

    function searchByParameter (event){
        event.preventDefault();
        setSearchParameters(videoGames.filter(game => game.name.includes(search)))
    }

    return (
    <div>
        <input className="searchbar" type='text' placeholder='What game would you like to find today?' value={search} onChange={(event) => setSearch(event.target.value)}/>
        <button className="searchbar-button" onClick={searchByParameter}>Search</button>
        <SearchResults searchParameters = {searchParameters}/>
    </div>
    )
}

export default Searchbar;