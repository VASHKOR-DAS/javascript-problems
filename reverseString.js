//kono String k reverse korte chaile

/**
var statment = "Hello Alien Bhai Brother.";
var reverse = "";

for (let i = 0; i < statment.length; i++) {
    let element = statment[i];
    reverse = element + reverse;  
}
console.log(reverse);
 */

//function diye korte chaile

function reverseString(string) {
    var reverse = "";

    for (let i = 0; i <string.length; i++) {
       
        let element = string[i];
       
        reverse = element + reverse;
    }
    return reverse;
}
var statment = "Hello Alien Bhai Brother.";
var foodVlog = "pepe is misty"
//var output = reverseString(statment);
//console.log(output);

//own way
console.log(reverseString(statment));