import { useState } from 'react';
import './index.css';
import WorkoutChart from './components/WorkoutChart/WorkoutChart';
import DailyGoals from './components/DailyGoals/DailyGoals';
import QuickActions from './components/QuickActions/QuickActions';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="content-container">
        <WorkoutChart />
        <div className="secondary-container">
          <DailyGoals />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default App;
