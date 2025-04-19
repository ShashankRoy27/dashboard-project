import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainArea from './MainArea';

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar onCategorySelect={setSelectedCategory} />
      <MainArea category={selectedCategory} />
    </div>
  );
}

export default Dashboard;
