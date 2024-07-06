import React from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => (
  <div className="search-bar-container">
     <div className="search-icon-container">
      <img src="/search-icon.svg" alt="search icon" className="search-icon"/>
    </div>
    <input
      className="search-bar"
      type="text"
      placeholder="Pesquisar"
      onChange={(e) => onSearch(e.target.value)}
    />
   
  </div>
);

export default SearchBar;
