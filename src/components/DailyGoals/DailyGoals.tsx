import { useState } from 'react';
import dailyGoals from '../../data/dailyGoals.json';
import './DailyGoals.css';

interface Goal {
  id: number;
  task: string;
  completed: boolean;
}

const DailyGoals = () => {
  const [goals, setGoals] = useState<Goal[]>(
    dailyGoals.map((goal) => ({ ...goal, completed: goal.completed || false }))
  );

  const handleToggle = (id: number) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return (
    <div className="goals-container">
      {goals.map((goal) => (
        <label key={goal.id} className="goal-item">
          <input
            type="checkbox"
            checked={goal.completed}
            onChange={() => handleToggle(goal.id)}
          />
          <span>{goal.task}</span>
        </label>
      ))}
    </div>
  );
};

export default DailyGoals;
