import React from 'react';

interface FilterTodosProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterTodos: React.FC<FilterTodosProps> = ({ filter, setFilter }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <label>
        Filter:
        <select value={filter} onChange={handleChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </label>
    </div>
  );
}

export default FilterTodos;
