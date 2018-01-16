// master branch //

// in index.html, place <script src="js/java.js"></script> at the bottom of the <body> so that the page loads first //

console.log("java.js");

console.log("add this " + "2 + 2", "and another", 3 + 4);

var myName = "Taylor";

var lostColors = {yellow: ["dandelion", "mac 'n cheese"], blue:"chlorine",
            add: function(){
                return 2 + 2;
            }
        };
var crayonBox = ["yellow", "blue", "lemon", lostColors];
var coinPurse = {dimes:1, nickles:3, quarters:2, pennies:3};
var junkDrawer = ["tape", "sticky", "jar of mayonaise", 2, "fishing wire", crayonBox, coinPurse];

var sharpObject = true;
// Because coinpurse {} is an object, you cannot call it with an index like coinPurse[0] //

// Brackets: []array {}object ()method //

console.log("What kind of data is myName?" + "  Var myName is a", typeof(myName) + ".")
// typof() is a method. methods() are tied to objects{} //

console.log("how many letters", lostColors.yellow[0].length);
// .length() is an array method //

let itSnow = true;
let ice = false;
// === means that the datatype (string, boolean, number) has to match. 1 === "1" is false //

if (itSnow === true || ice === true){
    console.log("school is cancelled");
}else {
    console.log("we learn more cool stuff");
}
// If snow (OR = ||) ice is true, then "school is cancelled" //
// If snow (AND = &&) ice is true, then "school is cancelled" //
// If only 1 variable is true here, the code runs to else and is false "we learn more cool stuff" //

// let day= "Monday";
var day = "Monday";
function myDay(){
        var day = "Tuesday";
}

var day = "Wednesday";
myDay();

console.log("what day", day);

let phrase = "The quick brown fox jumps over the lazy dog";
console.log("length of phrase", phrase.length);//shows how many characters (including spaces and starting at 0) are in the let phrase //
console.log("where is fox", phrase.indexOf("fox")); // shows where the string "fox" beings----where is fox 16 //
console.log("what is 8", phrase.charAt(8)); // shows what character is in the 8th position in the string----"k"

let newStuff = `<h2>My Favorite Prawns of Ice Cream</h2>
                <p>${phrase}</p>
                <h3>By Taylor Bailey</h3>`;

let addToDom = document.getElementById("demo");
addToDom.innerHTML = newStuff;

let domItems = document.getElementsByClassName("super");
console.log("what is domItems", domItems); //targets specific div by index//

























