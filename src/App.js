import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app" style={{ display: 'flex' }}>
      <Sidebar onCategorySelect={handleCategorySelect} />
      <MainArea category={selectedCategory} />
    </div>
  );
}

export default App;
