/**

var name = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
//bachai kore niche rakhbo
var uniqueName = [];

for(var i = 0; i < name.length; i++){
    var element = name[i];
    //kono 1ta element array te ase kina seta indexOf diye ber krte hoy
    var index = uniqueName.indexOf(element);
    //kono element pa pele setar indexOf -1 hoye jay
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log("uniqueName :", uniqueName);

*/


//own way

var name = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
uniqueName = [];

for(var i = 0; i < name.length; i++){
    if(uniqueName.indexOf(name[i])== -1){
        uniqueName.push(name[i]);
    }
}
console.log(uniqueName);
