import React from "react";

const GameFilters = ({ categories, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("")}>Todos</button>
      {categories.map((category) => (
        <button key={category} onClick={() => setFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default GameFilters;
