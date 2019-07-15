const _ = require("lodash")

console.log("-----------array-------------------");  
let arr1 = [1,2,3,4,5,6];
let arr2 = _.chunk(arr1, 2);

var users = [
    { 'user': 'barney',  'active': true , 'age':20 },
    { 'user': 'fred',    'active': false , 'age':32 },
    { 'user': 'pebbles', 'active': false ,'age':45 }
  ];


let u1 = _.drop(users,1);
let u2 = _.dropWhile(users, (o) => {return o.active} );//will drop UNTIL predicate return false
let u3 = _.remove(users, (o) => {return o.user == 'fred'} );

users = _.union(users, u3);

let arr3 = [1,2,3];
let arr4 = _.fill(arr3, 2);

let arr5 = ['a', 'b', 'c'];
console.log(_.join(arr5, '~'));
console.log(_.nth(arr5,2));
let arr6 = _.slice(arr1, 1,4);
let arr7 = _.take(arr1, 5);

let arr8 = [1,2,3,3,1,5,8,9];
let arr9 = _.uniq(arr8);

let arr10 = _.zip(arr1, arr5);

console.log("-----------collection-------------------");  
let c1 = _.countBy(users, (o) => {return o.age});
let c2 = _.countBy(arr8);

 _.each(users, (o) => {console.log(_.snakeCase(o.user +o.age + o.active))}); // equal to _.forEach
 _.forEach(users, (o) => {console.log(_.kebabCase(o.user +o.age + o.active))});

let c3 = _.filter(users, (o)=>{ return o.age > 20}); //opposite of _.reject

let c4 = _.find(users, (o)=>{ return o.age > 40});

let rc = _.includes(arr8, 2);

console.log("-----------function-------------------");
//_.bind?
//_.bindKey?

console.log("-----------lang-------------------");
console.log("null to string " + _.toString(null)); // same with undefined 

rc = _.isEqual(arr1, arr2);
rc = _.isFunction(()=>{return 0});

let lang1 = new Map();
lang1['a'] = 'aa';
lang1['b'] = 'bb';
rc = _.isMap(lang1);
rc = _.isArray(lang1);

rc = _.isMatch(users[1], users[1]);

rc = _.isNull(null);
rc = _.isNull('');
//rc = _.isNull(undefiend);
rc = _.isUndefined(undefined);

rc = _.isObject(_);

rc = _.isSet(new Set());

rc =_.isString('abc'); 

console.log(_.toArray(users[0]));

console.log("-----------Object-------------------");
let o1 = {'a':1, 'b':2};
let o2 = {'c':3, 'd': o1};
console.log(_.assign(o2, o1));

console.log(_.at(o2, 'd.a', 'b'));

console.log("-----------string-------------------");
console.log(_.escape('fred, barney, & pebbles'));
console.log(_.lowerCase("SuJunYi"));

for(let i=1;i<1;i++){
    console.log(_.padStart(i,8,'0'));
}

console.log("-----------date-------------------");
console.log(new Date(_.now()));

console.log("-----------end-------------------");  

