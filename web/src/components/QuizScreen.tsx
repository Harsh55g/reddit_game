import React from 'react';
import { motion } from 'framer-motion';

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  category: string;
};

type QuizScreenProps = {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
};

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect
}) => {
  const getOptionStyle = (index: number) => {
    if (selectedAnswer === null) {
      return "bg-gray-700 hover:bg-gray-600";
    }
    
    if (index === question.correctAnswer) {
      return "bg-green-600";
    }
    
    if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
      return "bg-red-600";
    }
    
    return "bg-gray-700";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <div className="flex justify-between items-center mb-6">
        <span className="text-orange-500 font-bold">Question {questionNumber}</span>
        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
          {questionNumber}/{totalQuestions}
        </span>
      </div>

      <div className="mb-8">
        <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm mb-4">
          {question.category}
        </span>
        <h2 className="text-2xl font-bold">{question.text}</h2>
      </div>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
            whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
            onClick={() => selectedAnswer === null && onAnswerSelect(index)}
            disabled={selectedAnswer !== null}
            className={`w-full text-left p-4 rounded-xl transition-colors duration-300 ${getOptionStyle(index)} ${
              selectedAnswer === null ? "cursor-pointer" : "cursor-default"
            }`}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center"
        >
          <p className="text-lg">
            {selectedAnswer === question.correctAnswer ? (
              <span className="text-green-500 font-bold">🔥 Correct! Well done!</span>
            ) : (
              <span className="text-red-500 font-bold">😅 Incorrect. The right answer was: {question.options[question.correctAnswer]}</span>
            )}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizScreen;