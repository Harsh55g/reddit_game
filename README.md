# Reddit Trivia Challenge

An interactive trivia game for Reddit built with Devvit Web, React, and TypeScript. Test your knowledge of Reddit culture, memes, and internet history!

## 🎯 About the Project

This is a submission for the Reddit Hackathon that creates an engaging trivia game directly within a Reddit post. Players answer 10 randomized multiple-choice questions and compete for a spot on the global leaderboard.

## 🚀 Features

- Interactive quiz with 10 randomized questions about Reddit culture
- Smooth animations with Framer Motion
- Responsive design with TailwindCSS
- Global leaderboard showing top 10 players
- Score tracking and performance feedback
- Reddit-themed UI with orange accent colors

## 📁 Project Structure

```
reddit-trivia-challenge/
├── manifest.yaml           # Devvit configuration
├── package.json            # Project dependencies
├── web/
│   ├── src/
│   │   ├── App.tsx         # Main application component
│   │   ├── main.tsx        # Entry point
│   │   ├── index.css       # Global styles
│   │   └── components/
│   │       ├── StartScreen.tsx
│   │       ├── QuizScreen.tsx
│   │       └── ResultScreen.tsx
│   ├── index.html          # HTML template
│   ├── tsconfig.json       # TypeScript configuration
│   ├── vite.config.ts      # Vite configuration
│   ├── tailwind.config.js  # Tailwind configuration
│   └── postcss.config.js   # PostCSS configuration
└── README.md
```

## 🛠️ Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:3000

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🚢 Deployment to Reddit

1. **Install Devvit CLI**
   ```bash
   npm install -g @devvit/cli
   ```

2. **Login to Devvit**
   ```bash
   devvit login
   ```

3. **Deploy the App**
   ```bash
   devvit deploy
   ```

## 🎨 Design Elements

- **Color Palette**: Reddit orange (#FF4500) with dark gray backgrounds
- **Typography**: Clean, readable fonts with appropriate sizing
- **Animations**: Smooth transitions between screens using Framer Motion
- **Feedback**: Emoji-based responses for different score ranges
- **Responsive**: Works on both mobile and desktop devices

## 🧠 Quiz Content

The trivia game includes questions about:
- Reddit history and founding
- Platform features and functionality
- Community culture and memes
- Awards and recognition systems
- Subreddit knowledge

## 🏆 Bonus Features

- Randomized question order for each game session
- Personalized experience with Reddit username integration
- Global leaderboard with top 10 players
- Performance visualization with progress bars
- Emoji feedback based on score performance

## 🤝 Contributing

This project was created for the Reddit Hackathon. Feel free to fork and modify for your own Devvit projects!

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using Devvit Web, React, TypeScript, and TailwindCSS