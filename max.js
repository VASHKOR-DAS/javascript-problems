/**
konta boro seta er kora
*/

//2joner majhe compare korte chaile

/**
var business = 450;
var minister = 350;

if(business > minister) {
    console.log("Business is bigger")
}
else{
    console.log("Minister is bigger")
}

*/

//3joner majhe condition diye compare korte chaile

/**
var business = 850;
var minister = 950;
var sochib = 750;

if(business > minister) {
    if(business > sochib) {
        console.log("Business is bigger")
    }
    else{
        console.log("Sochib is bigger")
    }  
}
else{
    if(minister > sochib){
        console.log("Minister is bigger")
    }
    else{
        console.log("Sochib is bigger")
    }
}

*/

//Math diye korte chaile

var business = 850;
var minister = 950;
var sochib = 750;

var max = Math.max(business, minister, sochib);
console.log(max);
