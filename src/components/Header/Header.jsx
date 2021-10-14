import React from 'react';
import './Header.css'
import SearchBar from './SearchBar/SearchBar';


const Header = (props) => {


    return ( 
            <div className='header-color header-style'>
                <SearchBar onSearch={props.onSearch}/>
            </div>
     );
}

export default Header;