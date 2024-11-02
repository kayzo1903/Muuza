'use client'
import React, { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('business');

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add search logic based on the filter and searchTerm here
    console.log(`Searching for ${searchTerm} in ${filter}`);
  };

  return (
    <div className='px-4'>
      <form onSubmit={handleSearch} className='flex gap-2 flex-wrap'>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className='px-2 py-1 border border-gray-300 rounded-md'>
          <option value='business'>Business</option>
          <option value='foods'>Foods</option>
          <option value='locations'>Locations</option>
        </select>

        <input 
          type='text' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder={`Search ${filter}`} 
          className='px-2 py-1 border border-gray-300 rounded-md flex-1 h-12 outline-none' 
        />

        <button type='submit' className='px-4 py-1 bg-skin text-white rounded-md'>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
