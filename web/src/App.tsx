import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

// Define types
type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  category: string;
};

type UserScore = {
  username: string;
  score: number;
  timestamp: number;
};

// Sample quiz data
const quizQuestions: Question[] = [
  {
    id: 1,
    text: "What year was Reddit founded?",
    options: ["2004", "2005", "2006", "2007"],
    correctAnswer: 1,
    category: "History"
  },
  {
    id: 2,
    text: "What is the name of Reddit's alien mascot?",
    options: ["Snoo", "Doodle", "Alien", "Redditor"],
    correctAnswer: 0,
    category: "Mascot"
  },
  {
    id: 3,
    text: "Which subreddit is known as the 'front page of the internet'?",
    options: ["/r/all", "/r/popular", "/r/frontpage", "/r/everything"],
    correctAnswer: 0,
    category: "Subreddits"
  },
  {
    id: 4,
    text: "What does AMA stand for on Reddit?",
    options: ["Ask Me Anything", "Always More Answers", "Amazing Memes Available", "All My Answers"],
    correctAnswer: 0,
    category: "Acronyms"
  },
  {
    id: 5,
    text: "What is the maximum character limit for a Reddit post title?",
    options: ["100", "200", "300", "400"],
    correctAnswer: 2,
    category: "Platform Rules"
  },
  {
    id: 6,
    text: "Which of these is NOT a default sort option on Reddit?",
    options: ["Hot", "New", "Top", "Fresh"],
    correctAnswer: 3,
    category: "Platform Features"
  },
  {
    id: 7,
    text: "What is the name of Reddit's premium membership?",
    options: ["Reddit Gold", "Reddit Platinum", "Reddit Premium", "Reddit Plus"],
    correctAnswer: 2,
    category: "Platform Features"
  },
  {
    id: 8,
    text: "What year did Reddit introduce the upvote/downvote system?",
    options: ["2005", "2006", "2007", "2008"],
    correctAnswer: 0,
    category: "History"
  },
  {
    id: 9,
    text: "Which of these is a real Reddit award?",
    options: ["Gold Star", "Platinum Trophy", "Silver Medal", "Bronze Badge"],
    correctAnswer: 0,
    category: "Awards"
  },
  {
    id: 10,
    text: "What is the name of Reddit's official mobile app?",
    options: ["Reddit Mobile", "Reddit Now", "Reddit Official", "Reddit App"],
    correctAnswer: 0,
    category: "Platform Features"
  }
];

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'start' | 'quiz' | 'result'>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [username, setUsername] = useState<string>('Anonymous');
  const [leaderboard, setLeaderboard] = useState<UserScore[]>([]);

  // Initialize the game
  useEffect(() => {
    // In a real Devvit app, we would get the username from context.user.username
    // For now, we'll use a placeholder
    setUsername('u/ExampleUser');
    
    // Shuffle questions for randomization
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
  }, []);

  const startGame = () => {
    setCurrentScreen('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    // Check if answer is correct
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore((prev: number) => prev + 1);
    }
    
    // Move to next question or finish quiz
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev: number) => prev + 1);
        setSelectedAnswer(null);
      } else {
        finishQuiz();
      }
    }, 1000);
  };

  const finishQuiz = () => {
    // In a real Devvit app, we would save the score to context.storage
    // For now, we'll just show the result screen
    setCurrentScreen('result');
    
    // Mock leaderboard data
    const mockLeaderboard: UserScore[] = [
      { username: 'u/QuizMaster', score: 10, timestamp: Date.now() - 100000 },
      { username: 'u/TriviaKing', score: 9, timestamp: Date.now() - 50000 },
      { username: 'u/ExampleUser', score: score, timestamp: Date.now() },
      { username: 'u/RedditRookie', score: 7, timestamp: Date.now() - 30000 },
      { username: 'u/Knowledgeable', score: 8, timestamp: Date.now() - 20000 }
    ];
    
    setLeaderboard(mockLeaderboard);
  };

  const restartGame = () => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    startGame();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">Reddit Trivia Challenge</h1>
          <p className="text-gray-400">Test your knowledge of Reddit culture and internet history!</p>
        </header>

        <main className="bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8">
          {currentScreen === 'start' && (
            <StartScreen onStart={startGame} username={username} />
          )}
          
          {currentScreen === 'quiz' && questions.length > 0 && (
            <QuizScreen
              question={questions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={handleAnswerSelect}
            />
          )}
          
          {currentScreen === 'result' && (
            <ResultScreen
              score={score}
              totalQuestions={questions.length}
              username={username}
              leaderboard={leaderboard}
              onRestart={restartGame}
            />
          )}
        </main>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Built with Devvit for the Reddit Hackathon</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default App;