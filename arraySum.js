//array jog korar niom

/** var numbers = [45, 65, 78, 12, 3, 54, 65];
var sum = 0;

for(var i = 0; i < numbers.length; i++) {
    //array er sob element niye kaj korte chaile, array er variable er pore.length hobe
    var element = numbers[i];
    sum = sum + element;
}
console.log("Total of the numbers: ", sum);

*/

//function diye korte chaile

function getArraySum(numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 12];
var result = getArraySum(numbers);
console.log("Total of the numbers: ", result);

//others way
var total = getArraySum([43, 56, 12, 41, 86])
console.log("Total of the numbers: ", total);

