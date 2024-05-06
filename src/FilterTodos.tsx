import React from 'react';

function FilterTodos({ filter, setFilter }: { filter: string; setFilter: (filter: string) => void }) {
  return (
    <div>
      <label>
        Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </label>
    </div>
  );
}

export default FilterTodos;
