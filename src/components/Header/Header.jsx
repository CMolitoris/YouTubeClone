import React from 'react';
import SearchBar from './SearchBar/SearchBar';


const Header = () => {


    return ( 
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8 text-center'>
                <SearchBar />
            </div>
            <div className='col-2'></div>
        </div>
     );
}

export default Header;