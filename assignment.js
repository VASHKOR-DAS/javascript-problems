/**
feetToMile covert


woodCalculator

chair 1cf feel wood
table 3cf feel wood
khat 5cf feel wood
(cf = cubic feet)



brickCalculator

1 - 10tola = 15feet
11 - 20tola = 12feet
21 tola theke up = 10feel
every feet a hight need a brick 1000pcs



tinyFriend
sobcheye choto frnd er nam array er vitor theke khuje ber korte hobe
*/


//assinment 1

function feetToMile(feet) {
    var feet = feet * 0.0001893939;
    return feet;
}

var feet = feetToMile(5280);

console.log(feet);




// assignment 2

function woodCalculator(chair, table, khat) {
    var c = chair * 1;
    var t = table * 3;
    var k = khat * 5;

    var total = c + t + k
    return total
}

var totalWoodCF = woodCalculator(2, 5, 3);
console.log(totalWoodCF);
//CF = Cubic Feet




// assignment 3

function brickCalculator(floor) {

    if (floor <= 10) {

        //var oneToTen = floor * 15;

        floor * (15 * 1000);

        //return oneToTen

        return floor * (15 * 1000)
    } else if (floor <= 20) {

        const tenToTwenty = floor * (12 * 1000);

        return tenToTwenty
    } else if (floor > 20) {

        const TwentyToUp = floor * (10 * 1000);

        return TwentyToUp
    } else {

        return floor
    }


}

var floor = brickCalculator(21);

console.log(floor);



// assignment 4

var name = ["Sakibur", "Rahim", "Rony", "Abu Ullah", "Khokon", "Joy"];

var tinyFriend = name[0];

for (var i = 0; i < name.length; i++) {
    var element = name[i];

    if(element.length < tinyFriend.length) {
        tinyFriend = element;
    }
    
}

console.log(tinyFriend);


//Big length friend name
/**
var name = ["Sakibur", "Rahim", "Ron", "Abu Ullah", "Khokon"];

var BigFriend = '';

for (var i = 0; i < name.length; i++) {
    var element = name[i];

    if(element.length > BigFriend.length) {
        BigFriend = element;
    }
    
}

console.log(BigFriend);
*/


