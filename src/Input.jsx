
import './Input.css';

import React, { useState, useRef, useEffect } from 'react';

const Input = ({ options }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter options based on user input
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);

    // Show the dropdown when there are filtered options
    setShowDropdown(filtered.length > 0);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setInputValue(option);
    setFilteredOptions([]);
    setShowDropdown(false);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter' && filteredOptions.length > 0) {
      handleOptionClick(filteredOptions[0]);
    }
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-48">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
          placeholder="Type to filter options"
          className="input-field"
        />

         <div class="dropdown">
          <button
            id="dropdownRadioBgHoverButton"
            data-dropdown-toggle="dropdownRadioBgHover"
            class="dropdown-button"
            onclick="toggleDropdown()"
          >
            Dropdown <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

          <div id="dropdownRadioBgHover" class="dropdown-menu">
            <ul class="dropdown-list">
                  {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          </div> 
      </div>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default Input;




