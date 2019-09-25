const requestModule = require('./SL_Request');
const fs = require('fs');

async function main(){

    // login
    let auth = {};
    try{
        auth = await requestModule.login();
    }
    catch(err)
    {
        console.log(err);
        return;
    }

    // read file and make requests
    let data = fs.readFileSync('./data/csv/ItemCode_Add_808.csv', 'utf8');
    let contentLines = data.split('\r\n');
    var propertyNames = contentLines[0].split(',');
    data = {};
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
            data[propertyNames[j]] = row[j];
        }
        console.log(data);

        // if(data !== null){
        //     await requestModule.addItem(auth, data);
        // }
    }


}



main();