//swap holo kono kichu change kora, mane 1tar value onnotay jaoya

var a = 5;
var b = 7;
console.log("before swap: a =", a, "b =", b);

/**
mone koro tmr 2ta bati ase
1st bati te jus
2nd bati te pani

akhn bati change korte chaile
onno 1ta bati nite hobe & sei bati te age jus rakhte hobe

then 1st bati khali hole, other batir pani 1st bati te dhalte hobe
*/

var temp = a;
//temp variable ta holo, sei boro bati, a er jus temp a rakhlam
a = b;
//b er pani 1st bati te rakhlam
b = temp;
//temp a rakha jus 2nd bati te nilam
console.log("after swap: a =", a, "b =", b);

// 2nd method

var x = 5;
var y = 7;
x = x + y;
//console.log("after swap: x =", x, "y =", y);
y = x - y;
//console.log("after swap: x =", x, "y =", y);
x = x - y;
console.log("after swap: x =", x, "y =", y);

// 3rd method, ata sudhui javascript a kaj korbe

var p = 5; 
var q = 7;

[p, q] = [q, p]
console.log("after swap: p =", p, "q =", q);