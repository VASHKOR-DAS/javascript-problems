/** kono 1ta array er majhe, sobcheye boro sonkha konta
 */

var marks = [45, 81, 63, 98, 56, 35, 23];
var max = marks[0];
for(var i = 0; i < marks.length; i++) {
    var element = marks[i];

    /** marks[i] er poriborte element diye kaj korar jnno uporer 
    
    var element = marks[i];
    ai variable ta dhora hoiche
    */

    if(element > max) {
        max = element;
    }
}
console.log("Highest value is: ", max);