 const fs = require('fs');

//  fs.readFile('./data/example_item.json','utf8', function(err, data){
//     if(err)
//     {
//         console.log("error Code:" + err.code + "detail:" + err.message);
//         return;
//     }
//  });


let data = fs.readFileSync('./data/csv/ItemCode_Add_808.csv', 'utf8');
let contentLines = data.split('\r\n');
var propertyNames = contentLines[0].split(',');
let item = {};

for(let i=2;i<contentLines.length; i++)
{
    let row = contentLines[i].split(',');
    if(row == null)
        continue;

    for(let j=0;j<row.length;j++){
        if(row[j] ==null || row[j].length == 0)
        {
            continue;
        }
        item[propertyNames[j]] = row[j];
    }

    console.log(item);
}

console.log("pause");