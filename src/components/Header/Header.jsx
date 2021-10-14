import React from 'react';
import './Header.css'
import SearchBar from './SearchBar/SearchBar';


const Header = () => {


    return ( 
            <div className='header-color header-style'>
                <SearchBar />
            </div>
     );
}

export default Header;