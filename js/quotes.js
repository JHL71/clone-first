const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The first principle is that you must not fool yourself and you are the easiest person to fool",
    author: "Richard P. Feynman"
  },
  {
    quote: "If you judge people, you have no time to love them.",
    author: "Mother Teresa"
  },
  {
    quote: "The opposite of a correct statement is a false statement. But the opposite of a profound truth may well be another profound truth.",
    author: "Niels Bohr"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "If you can't explain it to a six year old, you don't understand it yourself.",
    author: "Albert Einstein"
  },
  {
    quote: "You may delay, but time will not.",
    author: "Benjamin Franklin"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
