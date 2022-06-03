/** kono 1ta array er majhe, sobcheye choto sonkha konta
 */

 var marks = [45, 81, 63, 98, 56, 35, 23];
 var min = marks[0];
 
 for(var i = 0; i < marks.length; i++) {
     var element = marks[i];
 
     /** marks[i] er poriborte element diye kaj korar jnno uporer 
     
     var element = marks[i];
     ai variable ta dhora hoiche
     */
 
     if(element < min) {
        min = element;
     }
 }
 console.log("lowest value is: ", min);