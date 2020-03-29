import React from 'react';

const SearchForm = ({ handleSubmit, handleChange, searchStr }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} value={searchStr} />
    <button type="submit">Search</button>
  </form>
)

export default SearchForm;