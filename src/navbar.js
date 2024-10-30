import React from 'react';

const Navbar = ({ neighborhoods, onSelect }) => {
  return (
    <nav>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select a neighborhood</option>
        {Object.keys(neighborhoods).map((neighborhood) => (
          <option key={neighborhood} value={neighborhood}>
            {neighborhood}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;