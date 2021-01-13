
//  1

 // Here we ask the user if they eat fish, and store the result (true/false) in a variable.
// <<<<<<< HEAD

var eatFish = confirm ('do you eat fish?')

// If the user eats fish (eatFish === true) doument.write, "Fish is rich in B12".

if(eatFish=== true){
    document.write("Fish is rich in B12");
}
else{
    document.write("You must be vegan");
}


 // 2
 // Ask the user what year they were born, and store their response to a variable.

 var birthYear= prompt ('What Year You were Born?');

 if(birthYear < 1997) {
     alert("You are Generation Z");
 }
 else if(birthYear < 1997 || birthYear > 1980){
     alert ("You are Millennial!");
 }
 else{
     alert ("we don't know?")
 }; 



 // 3//

 // Create an array called  animals.

 var animals= ["bird", "cat", "dog", "wolf", "fish"];
 
 console.log('Animals')

 // Log an animal in the cat.   
    var cat = animals[1];
    console.log('cat')


 // Log the animal dog.
    
    var dog =animals[2];
    console.log('dog')

// Log the animal bird.
    
    var bird =animals[0];
    console.log('bird')

 // Log the animal[13]. //what result do you get
    
    var animal13 = [animal13];
    console.log ('animal13')

 // Add an new animal to the [2] position of the array with out changing the array

    animals.splice(0, 1 ,'panther');
    console.log(animals)

//4//

// Created an array named myBands.

    let bands = ['The beatles', 'Linkin park', 'The Spinners']

 // Created a prompt to get the user's favorite band.
    function myFunction(){
    let bands= prompt('What is Your Favourite band?', 'The beatles');
    if (bands != null){
        document.getElementById("here").innerHTML="alot of people love beatles"}
    };
    



 // Now we check the myBands array to see if it contains the user's answer.
 // If the user's band is not in the array...
//  if (myBands.indexOf(userGuessLower) === -1) {
 
 // If it is in the array...



//5//

// song-object
// Create a constructor function called Song. Song should take in two arguments, 
    // title and artist, which should both be added as properties when the Song 
    // constructor function is used. The Song function should also 
    // have a method called play on its prototype. When called, the play function 
    // should console.log the name of that specific song preceded by the word 'Playing:'.
// function should also have a method called play on its prototype. When called, the play
//  function should console.log the name of that specific song preceded by the word 'Playing:'.

let myBands = []; 
function Song(title, artist) {
    this.title= title;
    this.artist= artist;
}

Song.prototype.play = function() {
    document.write("Playing: " + this.title + this.artist)
}
let song1 = new Song('linkin park, ', 'in the end' + '<br>');
 let song2 = new Song('jay-z, ', '99 problems' + '<br>');
 let song3 = new Song('weeknd, ', 'blinding lights' + '<br>');
 let song4 = new Song('akon, ', 'keep up' + '<br>');

    song1.play();
    song2.play();
    song3.play();
    song4.play();



/*6//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

// // Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/

let x = sum(5, 7, 9);
console.log(x);
function sum(a, b, c) {
    return a + b + c;
}









//7/*
// ----------------------------------------
// CHALLENGE
// ----------------------------------------

// Write function named doubleLetters that will take a string and double every letter in the string

// Example: if you pass it "abc" then it should return "aabbcc"
// */

let doubles = 'HeLlO';

function doubleLetters(doubles) {

    let output = "";

    for (let i = 0; i < doubles.length; i++) {
        output += doubles[i] + doubles[i];
    }
    return output;

}

console.log(doubleLetters(doubles));





/*8//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

// Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

    const numbers =[9,7,3];
    function doubleNumbers(numbers) {
    return numbers.map(x => x * 2); 
    }
    console.log(doubleNumbers(numbers));  

// function sum(input){
             
//     if (toString.call(input) !== "[object Array]")
//        return false;
         
//                var total =  0;
//                for(var i=0;i<input.length;i++)
//                  {                  
//                    if(isNaN(input[i])){
//                    continue;
//                     }
//                      total += Number(input[i]);
//                   }
//                 return total;
//                }
//    console.log(sum([1,2,3]));
//    console.log(sum([100,-200,3]));
//    console.log(sum([1,2,'a',3]));




