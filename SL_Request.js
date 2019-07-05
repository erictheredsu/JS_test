'use strict'
const request = require('request-promise')

const SL_URL="http://10.193.84.13:50001/b1s/v1";
const uri = SL_URL+ "/Login";
const login_options = { method: 'POST',
  uri: uri,
  headers: {  
     'Content-Type': 'text/plain' 
	},
  body: '{\n    "CompanyDB": "US_I305582_2906_07_02",\n    "UserName": "manager",\n    "Password": "manager"\n}'
};
async function login(){
    let auth = {}; 
    try {
      var rc = await request(login_options);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
    let resp = JSON.parse(rc);
    auth.cookie = "B1SESSION=" + resp.SessionId;

    return auth;
}

var item_opt = {
  method : 'POST',
  uri: 'http://10.193.84.13:50001/b1s/v1/Items',
  headers: {  
    'Content-Type': 'text/plain'
  }
}

async function addItem(auth, data){
  item_opt.headers.cookie = auth.cookie;
  item_opt.body = JSON.stringify(data);
  
  try{
    await request(item_opt)
    console.log("add success :" + data.ItemCode );
  }
  catch( err)
  {
    console.log(err);
  }
}

exports.login = login;
exports.addItem = addItem;
