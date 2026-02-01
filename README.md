# 🎮 Assembly: Endgame

A Hangman-style word-guessing game built with **React** and **Vite**. Guess the word before losing all programming languages!

## ⚡ Quick Start

```bash
git clone https://github.com/yourusername/assembly_endgame.git
cd assembly_endgame
npm install
npm run dev
```

## 🎮 How It Works

- Guess letters to reveal a random word (485-word vocabulary)
- 8 wrong guesses allowed before game over
- Each wrong guess eliminates a programming language
- Languages at stake: HTML → CSS → JavaScript → React → TypeScript → Node.js → Python → Ruby → Assembly
- Real-time feedback with witty farewell messages

## 🛠️ Tech Stack

- **React 19** - Functional components with hooks (useState)
- **Vite 7** - Fast build tool and dev server
- **JavaScript ES6+** - Dynamic array methods, state logic
- **CSS** - Responsive, accessible styling
- **clsx** - Conditional class names

## 📂 Project Structure

```
src/
├── App.jsx        # Main game logic & component
├── utils.js       # Random word & farewell text helpers
├── languages.js   # Programming languages data
├── words.js       # 485-word vocabulary
└── App.css        # Game styling
```

## 🎓 Key Features

✅ Dynamic word & button generation  
✅ State management with React hooks  
✅ Case-handling logic (uppercase guesses vs lowercase word)  
✅ Accessibility (ARIA labels, live regions)  
✅ Responsive, mobile-friendly UI  
✅ Color-coded language chips

## 📋 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## 🎓 Skills Demonstrated

- React fundamentals & state management
- JavaScript array methods (filter, map, every, forEach)
- Problem-solving (case normalization across comparisons)
- Responsive UI/UX design & accessibility
- Modern developer tools (Vite, ESLint, Git)

---

Built by Priyanshu Rajoria | [LinkedIn](https://www.linkedin.com/in/priyanshu-rajoria/) | [GitHub](https://github.com/Rajoria211)
