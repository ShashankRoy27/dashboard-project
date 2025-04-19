import React from 'react';
import AnalyticsChart from './AnalyticsChart';
import ReportsChart from './ReportsChart';
import ChartsChart from './ChartsChart';

function MainArea({ category }) {
  return (
    <div style={{ flex: 1, padding: '20px' }}>
      {category === 'Analytics' ? (
        <AnalyticsChart />
      ) : category === 'Reports' ? (
        <ReportsChart />
      ) : category === 'Charts' ? (
        <ChartsChart />
      ) : (
        <h3>Please select a category</h3>
      )}
    </div>
  );
}

export default MainArea;
