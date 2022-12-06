var cowsay = require("cowsay");
const Quote = require('inspirational-quotes');
console.log(cowsay.say({
    text : (Quote.getRandomQuote())+"-Saketh lodu",
    e : "$$",
    T : "U "
}));


