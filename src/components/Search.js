import React, { useContext } from 'react'
import MainContext from '../MainContext'
import {IoMdSearch} from 'react-icons/io'
const Search = () => {

    const {search, setSearch} = useContext(MainContext)

    return (
        <div className="search">
            <div className="icon">
                <IoMdSearch/>
            </div>
            <input 
                type="text" 
                placeholder="Search Brands"
                onChange={e => setSearch(e.target.value)} />
            
        </div>
    )
}

export default Search
