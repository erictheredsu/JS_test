const request = require('request-promise')

const SL_URL="http://10.193.84.13:50001/b1s/v1";

var uri = SL_URL+ "/Login";
var options = { method: 'POST',
  uri: uri,
  headers: {  
     'Content-Type': 'text/plain' 
	},
  body: '{\n    "CompanyDB": "US_I305582_2906_07_02",\n    "UserName": "manager",\n    "Password": "manager"\n}'
};

var ITEM_START= 101;
var ITEM_NUMBER=100;
var ITEM_NAME_PREFIX="item"

async function foo(){
  try {
    var rc = await request(options);
    //console.log(rc);
  } catch (error) {
    console.log(error.message);
    return;
  }
  let resp = JSON.parse(rc);
  
  var opt = {
    method : 'POST',
    uri: 'http://10.193.84.13:50001/b1s/v1/Items',
    headers: {  
      'Content-Type': 'text/plain'
    }
  }
  opt.headers.cookie = "B1SESSION=" + resp.SessionId;
  body = {};

  for(i=ITEM_START;i<ITEM_START +ITEM_NUMBER ;i++)
  {
      body.ItemCode = "ii" + i;
      body.ItemName = "item" + i;
      body.ItemType =  "itItems";

      opt.body = JSON.stringify(body);
      try {
        rc = await request(opt)
        console.log("add success :" + body.ItemCode );
      } catch (error) {
        console.log(error.message);
      }
  }
}

foo();








// var ITEM_NUMBER=3
// var ITEM_NAME_PREFIX="item"

// request(options)
//   .then(function (body){
//     resp = JSON.parse(body);
//     options = {
//       method : 'POST',
//       uri: 'http://10.193.84.13:50001/b1s/v1/Items',
//       headers: {  
//         'Content-Type': 'text/plain'
//      }
//     }
//     options.headers.cookie = "B1SESSION=" + resp.SessionId;
//     body = {};

//     for(i=1;i<ITEM_NUMBER;i++)
//     {
//         body.ItemCode = "ii" + i;
//         body.ItemName = "item" + i;
//         body.ItemType =  "itItems";

//         options.body = JSON.stringify(body);
//         request(options)
//           .then(function (body){
//           console.log("add item success");
//         })
//           .catch(function (err){
//           console.log(err.message);
//         });
//     }
//   })
//   .catch(function (err){
//       console.log("Login fail" + err.message)
//   });
