import React from 'react'
import {IoMdSearch} from 'react-icons/io'
const Search = () => {
    return (
        <div className="search">
            <div className="icon">
                <IoMdSearch/>
            </div>
            <input type="text" placeholder="Search Brands" />
            
        </div>
    )
}

export default Search
