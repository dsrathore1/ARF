import React from 'react';
import Search from "../Assets/Icons/search.png";

const SearchBar = ({ showBar }) => {

    return (
        showBar ? <div className='contactSearchContainer'>
            < img className='contactSearchIcon' src={Search} alt="#search" ></img >
            <input className='contactSearchBar' placeholder='Search' />
        </div > : <></>
    )
}

export default SearchBar