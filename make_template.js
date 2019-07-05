const fs = require('fs');

let input = fs.readFileSync('./schema/items.json', 'utf8');
let items = JSON.parse(input);
let schemaArray = {};

let props = Object.keys(items);
for(let i=0;i< props.length;i++){
    if(items[props[i]] instanceof Array){
        schemaArray[props[i]] = items[props[i]];
        delete items[props[i]];
    }
}

schemaArray.items = items;

console.log("pause");