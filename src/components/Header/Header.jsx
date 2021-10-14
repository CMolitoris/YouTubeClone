import React from 'react';
import './Header.css'
import SearchBar from './SearchBar/SearchBar';


const Header = (props) => {


    return ( 
            <div className='header-color header-style'>
                <SearchBar getVideo={props.getVideo}/>
            </div>
     );
}

export default Header;