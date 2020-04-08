import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({handleSearch, seachBox, placeholder}) => (
    <input
        className='search'
        onChange={(e) => handleSearch(e.target.value)}
        type="search" placeholder={placeholder}
        value={seachBox}
    />

);