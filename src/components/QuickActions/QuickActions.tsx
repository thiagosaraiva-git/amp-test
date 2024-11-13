import { motion } from 'framer-motion';
import './QuickActions.css';

const QuickActions = () => {
  return (
    <div className="actions-container">
      <motion.button
        className="action-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Start Workout
      </motion.button>
      <motion.button
        className="action-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View Progress
      </motion.button>
    </div>
  );
};

export default QuickActions;
