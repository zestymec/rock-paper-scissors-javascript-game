# ✊✋✌️ Rock Paper Scissors | Logic-Based JavaScript Game

A classic, interactive Rock Paper Scissors game built to demonstrate core **JavaScript (ES6+)** concepts, event handling, and dynamic DOM manipulation. This project focuses on clean logic and real-time UI updates.

[**🎮 Play the Game Live**](https://rock-paper-scissors-javascript-game-omega.vercel.app/)

---

## 🚀 Technical Highlights

This project was a key milestone in my journey to master frontend development. It specifically showcases:

* **Event Listeners:** Efficiently capturing user input across multiple choice elements.
* **Randomized Logic:** Implementing a robust computer move generator using `Math.random()`.
* **State Management:** Tracking and updating scores dynamically without page refreshes.
* **Conditional Algorithms:** Determining winners using optimized nested ternary operators and conditional checks.
* **Dynamic UI Styling:** Changing background colors and messages in real-time based on game outcomes (Win/Loss/Draw).

## 🛠️ Tech Stack

* **Language:** JavaScript (ES6+)
* **Structure:** Semantic HTML5
* **Styling:** CSS3 (Flexbox for alignment & Hover effects)
* **Deployment:** Vercel (Continuous Deployment)

## 🧠 Core JavaScript Logic

The engine of the game revolves around a function that compares the `userChoice` against a `gencompChoice()`. 

```javascript
// Example of the win/loss logic implemented:
const showWinner = (userwin) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = "Congratulations! You win";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        computerScorepara.innerText = compScore;
        msg.innerText = "Comp win";
        msg.style.backgroundColor = "red";
    }
}