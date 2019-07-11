const _ = require("lodash")

let arr1 = [1,2,3,4,5,6];

// let arr2 = _.each(arr1,key);

console.log(_.escape('fred, barney, & pebbles'));

console.log(_.lowerCase("SuJunYi"));


for(let i=0;i<100;i++){
    console.log(_.padStart(i,4,'0'));
}

console.log("end");