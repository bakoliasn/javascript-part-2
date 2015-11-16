/*function sorter (a, b){
    return a.length - b.length;
}
var arr = ["steve", "john", "micheal", "nicholas"];
arr.sort(sorter);
//console.log(arr);

var arr1 = [{name: "steve", email: "abc@abc.com"},{name: "john", email:"johnsmith@email.com"},{name:"micheal", email: "email@micheal.com"}];
var newArr1 = arr1.sort(function(a,b){
   return a.name.length - b.name.length;
});
var newNewArr1 = arr1.sort(function(a,b){
    if(a.email < b.email){
        return -1;
    }else if (a.email>b.email){
        return 1;
    } else {
        return 0;
    }
});
console.log(newArr1);
console.log(newNewArr1);

var arrNum = [1,4,7,8,4,5,6];
var newArrNum = arrNum.map(function(a){
    return a*a;
});
console.log(newArrNum);
*/

function sqNum(a){
    return a.num * a.num;
}
var arrayOfObjects = [{num:4},{num:8},{num:7}];
console.log(arrayOfObjects.map(sqNum));