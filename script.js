// script.js
const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Do something today that your future self will thank you for.",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Everything you can imagine is real. – Pablo Picasso",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Dream big and dare to fail. – Norman Vaughan",
    "What we think, we become. – Buddha"
  ];
  
  function generateQuote() {
    const quoteText = document.getElementById('quote-text');
    quoteText.classList.remove('show');
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
  
    setTimeout(() => {
      quoteText.textContent = newQuote;
      quoteText.classList.add('show');
    }, 300);
  }
  
  document.addEventListener('DOMContentLoaded', generateQuote);
  