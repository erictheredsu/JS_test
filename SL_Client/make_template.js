const fs = require('fs');

function printSchemaFile(table ,tableName){
    let outline = '';
     Object.keys(table).forEach(e => {
        outline += e;
        outline += ',';
    });
    outline = outline.substring(0,outline.lastIndexOf(','));
    outline += "\r\n";

    let output = fs.writeFileSync('./target/' + tableName + '.csv',outline );
}

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


printSchemaFile(items, 'item');

props = Object.keys(schemaArray)
for(let i=0;i<props.length;i++){
    if(schemaArray[props[i]] instanceof Array && schemaArray[props[i]].length >0 )
    {
        let row = schemaArray[props[i]][0];
        printSchemaFile(row, props[i]);
    }
}





console.log("pause");