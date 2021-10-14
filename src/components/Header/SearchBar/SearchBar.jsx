import React from 'react';


const SearchBar = () => {


    return ( 
        <div className='col'>
            --Search Bar--
            <input className='form-control' type="text" name='searchBar'/>
            <button type='button' className='btn btn-sm btn-danger'>Logo</button>
        </div>
     );
}

export default SearchBar;