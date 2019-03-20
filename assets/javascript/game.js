// Variables

var wordchoices = [ "glove" , "bat" , "pitcher" , "infield" , "homerun"];
var wins = 0;
var guesses = 6;

var myWord = wordchoices[Math.floor(Math.random() * wordchoices.length)];

console.log(myWord);


document.onkeyup = function(event) {
    var userKey = event.key;
    console.log(userKey);
// creates shadow word
var shadowWord = [];
for (i=0; i<myWord.length; i++){
    shadowWord[i] = (" _ ");
    if(userKey==myWord[i]){
        shadowWord[i]=userKey;
        shadowWord.push(userKey);
    }}
        
    
    console.log(shadowWord);
// guessed letters

//checks to see if letter is in the word


//displays info
var winText = document.getElementById("wins-text");
var currentwordText = document.getElementById("current-word");
var remainingguessText = document.getElementById("remaining-guesses");
var guessedlettersText = document.getElementById("guessed-letters");
var shadowWord = document.getElementById("shadow-word");
}
