import React from 'react';

function Sidebar({ onCategorySelect }) {
  const categories = ['Analytics', 'Reports', 'Charts'];

  return (
    <div style={{ width: '200px', backgroundColor: '#f2f2f2', padding: '20px' }}>
      <h3>Categories</h3>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          style={{
            display: 'block',
            marginBottom: '10px',
            padding: '8px 12px',
            width: '100%',
            cursor: 'pointer',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
