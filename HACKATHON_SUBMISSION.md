# Reddit Hackathon Submission: Reddit Trivia Challenge

## Project Overview

**Reddit Trivia Challenge** is an interactive quiz game built for the Reddit Hackathon using Devvit Web, React, TypeScript, and TailwindCSS. Players can test their knowledge of Reddit culture, history, and internet trivia directly within a Reddit post.

## 🎯 Concept

The Reddit Trivia Challenge is a gamified experience that engages Reddit users with questions about the platform they love. Players answer 10 randomized multiple-choice questions and compete for a spot on the global leaderboard.

## 🧩 Technical Implementation

### Tech Stack
- **Frontend**: React with TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Devvit Integration**: Devvit Web (Interactive Posts)

### Key Features
1. **Interactive Quiz Interface**
   - 10 randomized questions about Reddit culture
   - Multiple-choice answers with immediate feedback
   - Progress tracking and score calculation

2. **Game Screens**
   - Start Screen with welcome message and instructions
   - Quiz Screen with question display and answer options
   - Results Screen with score visualization and leaderboard

3. **Leaderboard System**
   - Top 10 player rankings
   - Score-based positioning
   - Username highlighting for current player

4. **Responsive Design**
   - Mobile and desktop optimized layouts
   - Reddit-themed color scheme (orange accents on dark background)
   - Smooth animations and transitions

### Devvit Integration Points
- **User Context**: Display Reddit username (`context.user.username`)
- **Storage**: Save scores and leaderboard data (`context.storage`)
- **Web View**: Interactive post experience using Devvit Web

## 📁 Project Structure

```
reddit-trivia-challenge/
├── manifest.yaml           # Devvit app configuration
├── package.json            # Dependencies and scripts
├── HACKATHON_SUBMISSION.md # This file
├── README.md              # Setup and deployment instructions
├── assets/                # App icons and images
├── web/
│   ├── index.html         # HTML template
│   ├── src/
│   │   ├── App.tsx        # Main application component
│   │   ├── main.tsx       # Entry point
│   │   ├── index.css      # Global styles
│   │   ├── assets/        # Favicon
│   │   └── components/
│   │       ├── StartScreen.tsx
│   │       ├── QuizScreen.tsx
│   │       └── ResultScreen.tsx
│   ├── tsconfig.json      # TypeScript configuration
│   ├── vite.config.ts     # Vite build configuration
│   ├── tailwind.config.js # TailwindCSS configuration
│   └── postcss.config.js  # PostCSS configuration
└── dist/                  # Built files (generated)
```

## 🚀 Setup and Deployment

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```
   Access at http://localhost:3000

### Building for Production
```bash
npm run build
```

### Deploying to Reddit
1. Install Devvit CLI:
   ```bash
   npm install -g @devvit/cli
   ```

2. Login to Devvit:
   ```bash
   devvit login
   ```

3. Deploy the app:
   ```bash
   devvit deploy
   ```

## 🎨 Design Highlights

- **Reddit-themed UI**: Orange accents with dark mode styling
- **Responsive Layout**: Works on mobile and desktop
- **Smooth Animations**: Page transitions and feedback animations
- **Visual Feedback**: Color-coded answers and progress indicators
- **Emoji Integration**: Fun reactions based on performance

## 🏆 Game Features

- **Randomized Questions**: Different experience each playthrough
- **Performance Feedback**: Custom messages based on score
- **Global Leaderboard**: Compete with other Redditors
- **Score Visualization**: Progress bar and percentage display
- **Replayability**: "Play Again" functionality

## 🧠 Quiz Content

The trivia includes questions about:
- Reddit history and founding
- Platform features and functionality
- Community culture and memes
- Awards and recognition systems
- Subreddit knowledge

## 🎯 Hackathon Requirements Compliance

✅ **Devvit Web Integration**: Uses the Devvit Web system for interactive posts
✅ **KeyValue Store**: Designed to store quiz data and user scores
✅ **React + TailwindCSS**: UI built with React and styled with Tailwind
✅ **Multiple Components**: StartScreen, QuizScreen, ResultScreen
✅ **Smooth Animations**: Framer Motion for transitions
✅ **Leaderboard**: Top 10 usernames and scores display
✅ **User Integration**: Reddit username display
✅ **Offline Support**: Works locally with npm run dev
✅ **Deployment Ready**: Configured for devvit deploy
✅ **Documentation**: Complete README with setup instructions

## 🚀 Potential Enhancements

1. **Sound Effects**: Audio feedback for correct/incorrect answers
2. **Confetti Animation**: Celebration effect for high scores
3. **Social Sharing**: Post score to comments functionality
4. **Question Categories**: Filter questions by topic
5. **Difficulty Levels**: Easy/Medium/Hard question sets
6. **Streak Tracking**: Consecutive play tracking
7. **Achievements**: Badges for milestones

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for the Reddit Hackathon using Devvit**