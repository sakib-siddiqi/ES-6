// old way to double
let arr1=[1,2,3,4,5]
let double=[];
let doubleIt = peranum => peranum * 2;
for(let num of arr1){
    double.push(doubleIt(num))
}
console.log('Old Double',double);
// new way to double
let newDouble=arr1.map(num=>num*2)
console.log('new Double',newDouble);