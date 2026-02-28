# 🔐 SecurePass: Random Password Generator
A functional web application that generates secure, random passwords. This project was developed as part of the **Scrimba FullStack Path**, focusing on JavaScript arrays, loops, and DOM interaction.

### 🔗 Live Demo

---

## 📖 Project Overview
The goal of this project was to create a tool that helps users move away from insecure, repetitive passwords. It allows for high customization, ensuring that the generated strings meet various security requirements (length, inclusion of symbols, or numbers).

Building this helped me master:
* **State Management:** Using checkboxes to dynamically filter the pool of available characters.
* **Math Logic:** Utilizing `Math.random()` and `Math.floor()` to pick truly random indices from an array.
* **Clipboard API:** Implementing `navigator.clipboard.writeText` to let users copy passwords with a single click.

---

## ✨ Key Features
* **Customizable Length:** Choose between 6 to 11 characters depending on your needs.
* **Character Toggles:** Inclusion of Numbers and Symbols can be toggled on or off.
* **Multiple Options:** Generates four unique passwords at once so you can pick your favorite.
* **Click-to-Copy:** Simply click on any generated password to copy it instantly to your clipboard.
* **Modern Tooling:** Built with **Vite** for a fast, optimized development workflow.



---

## 🛠️ Tech Stack
* **HTML5:** Semantic structure for the input controls and display buttons.
* **CSS3:** Custom aesthetic using a soft purple/pink palette (`#f4acb7`) and clean typography.
* **JavaScript (Vanilla):** Logic for character randomization and clipboard functionality.
* **Vite:** Next-generation frontend tooling.

---

## 📂 File Structure
- `index.html` - The UI structure including the length selector and toggles.
- `index.css` - Custom styles, layout centering, and button hover effects.
- `index.js` - The "brain" of the app, containing the character arrays and generation logic.
- `vite.config.js` - Configuration for the Vite build tool.

---

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone [https://github.com/tineetot/Password-Generator.git](https://github.com/tineetot/Password-Generator.git)
