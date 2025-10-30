import React from 'react';
import { motion } from 'framer-motion';

type StartScreenProps = {
  onStart: () => void;
  username: string;
};

const StartScreen: React.FC<StartScreenProps> = ({ onStart, username }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center py-8"
    >
      <div className="mb-8">
        <div className="bg-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🧠</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">Welcome, {username}!</h2>
        <p className="text-gray-300 mb-2">Are you ready to test your Reddit knowledge?</p>
        <p className="text-gray-400 text-sm">Answer 10 questions about Reddit culture and internet history</p>
      </div>

      <div className="bg-gray-700 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-lg mb-3">How to Play</h3>
        <ul className="text-left text-gray-300 space-y-2">
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Answer 10 multiple-choice questions</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Get points for each correct answer</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Compete for a spot on the leaderboard</span>
          </li>
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
      >
        Play Now 🚀
      </motion.button>

      <div className="mt-8 text-gray-500 text-sm">
        <p>Questions are randomly selected each game</p>
      </div>
    </motion.div>
  );
};

export default StartScreen;