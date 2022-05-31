//count the Number of word in a string

var speech = "I am a good person. I don't snore at night";

//console.log(speech.length);
//uporer console a total length show hobe (spech soho count hobe)

var count = 0;


/**
for (var i = 0; i < speech.length; i++) {

    var character = speech[i];
    console.log(character);


    //uporer console a total string ti, lomba vabe show korbe

    //protita word er porei 1ta kore space thake, tai space gulo count korlei word count hoye jabe

    //single space thakle

    if (character == " ") {
        count++;
    }
}
count++;
console.log(count);
*/


//double space thakle (aitai main word count)

for (var i = 0; i < speech.length; i++) {

    var character = speech[i];

    //1ta white space && tar agertao jodi not qualls-to white space, tahole count a 1+koro
    //2ta condition e fillup korte hobe

    if (character == " " && speech[i-1] != " ") {
        count++;
    }
}
count++;
console.log(count);

