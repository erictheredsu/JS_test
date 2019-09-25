//study this website https://javascript.info/async

function foo(aa){
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(aa), 1000);
    })
}

//promise chain exercise
foo("done").then(result => {
    console.log(result);
    return result + " do something";
}).then(function(result){
    console.log(result);
    return result + " do another things";
}).then(function(result){
    console.log(result);
});


function goo(){
    return new Promise(function(resolve, reject){
        console.log("goo!")
        reject(new Error("Whoops!"));
    });
}


goo()
.then(
    function(result){console.log(result)},
    function(err){
        console.log("error " + err);
    }
).catch(err=>{
    console.log("a other catch " + err); //can't catch 
});

goo()
.then(result=>console.log(result))
.catch(err=>{
    console.log("catch " + err);
});

new Promise(function(resolve, reject) {
    throw new Error("Whoops! synchronous error that can be catched");
  }).catch(alert=>console.log(alert));

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       throw new Error("Whoops! asynchronous error that can't be catched");
//     }, 1000);
//   }).catch(alert=>console.log(alert));