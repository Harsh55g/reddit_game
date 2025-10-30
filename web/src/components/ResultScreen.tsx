import React from 'react';
import { motion } from 'framer-motion';

type UserScore = {
  username: string;
  score: number;
  timestamp: number;
};

type ResultScreenProps = {
  score: number;
  totalQuestions: number;
  username: string;
  leaderboard: UserScore[];
  onRestart: () => void;
};

const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  username,
  leaderboard,
  onRestart
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage === 100) return "🏆 Perfect Score! You're a Reddit Master!";
    if (percentage >= 80) return "🎉 Excellent! You know Reddit well!";
    if (percentage >= 60) return "👍 Good job! You're a solid Redditor!";
    if (percentage >= 40) return "😅 Not bad! Keep exploring Reddit!";
    return "📚 Time to browse more subreddits!";
  };
  
  const getScoreEmoji = () => {
    if (percentage === 100) return "🏆";
    if (percentage >= 80) return "🎉";
    if (percentage >= 60) return "👍";
    if (percentage >= 40) return "😅";
    return "📚";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center py-4"
    >
      <div className="mb-8">
        <div className="text-6xl mb-4">{getScoreEmoji()}</div>
        <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-xl text-gray-300 mb-6">{getScoreMessage()}</p>
        
        <div className="bg-gray-700 rounded-xl p-6 max-w-md mx-auto mb-8">
          <div className="text-5xl font-bold text-orange-500 mb-2">{score}<span className="text-2xl text-gray-400">/{totalQuestions}</span></div>
          <div className="text-gray-400">Correct Answers</div>
          <div className="mt-4 w-full bg-gray-600 rounded-full h-2.5">
            <div 
              className="bg-orange-500 h-2.5 rounded-full" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="mt-2 text-gray-400">{percentage}% Correct</div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">🏆 Leaderboard</h3>
        <div className="bg-gray-700 rounded-xl overflow-hidden max-w-md mx-auto">
          {leaderboard
            .sort((a, b) => b.score - a.score)
            .slice(0, 10)
            .map((user, index) => (
              <div 
                key={index} 
                className={`flex justify-between items-center p-4 ${
                  index < leaderboard.length - 1 ? "border-b border-gray-600" : ""
                } ${user.username === username ? "bg-orange-500/20" : ""}`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    index === 0 ? "bg-yellow-500 text-gray-900" : 
                    index === 1 ? "bg-gray-400 text-gray-900" : 
                    index === 2 ? "bg-amber-800 text-white" : 
                    "bg-gray-600"
                  }`}>
                    {index + 1}
                  </div>
                  <span className={user.username === username ? "font-bold text-orange-400" : ""}>
                    {user.username}
                  </span>
                </div>
                <div className="font-bold">{user.score}/{totalQuestions}</div>
              </div>
            ))
          }
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg mb-6"
      >
        Play Again 🔄
      </motion.button>

      <div className="text-gray-500 text-sm">
        <p>Share your score with fellow Redditors!</p>
      </div>
    </motion.div>
  );
};

export default ResultScreen;