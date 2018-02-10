/*global
alert, confirm, console, prompt
*/
var randomQuote;
var startQuote;

function init() {
    "use strict";
    document.querySelector(".quote-" + startQuote).style.display = "none";
    if (randomQuote > 0) {
        document.querySelector(".quote-" + randomQuote).style.display = "none";
    }
}

startQuote = Math.floor(Math.random() * 10) + 1;
document.querySelector(".quote-" + startQuote).style.display = "block";

document.querySelector(".newQuote").addEventListener("click", function () {
    "use strict";
    init();
    randomQuote = Math.floor(Math.random() * 10) + 1;
    console.log(randomQuote);
    document.querySelector(".quote-" + randomQuote).style.display = "block";
});