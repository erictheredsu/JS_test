'use strict'

const demo = {
    aaa : "a_string",

    printx : function (content){
        console.log(content);
    }

};


function add(a, b){
    return a + b;
}


exports.demo =  demo;
exports.add = add;