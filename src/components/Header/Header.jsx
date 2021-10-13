import React from 'react';
import './Header.css'
import SearchBar from './SearchBar/SearchBar';


const Header = () => {


    return ( 
        <div className='row header-color header-style'>
            <div className='col'></div>
            <div className='col text-center'>
                <SearchBar />
            </div>
            <div className='col'></div>
        </div>
     );
}

export default Header;