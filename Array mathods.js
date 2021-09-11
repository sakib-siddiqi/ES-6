let num=[1,2,3,4,5,6,7,1];

// Join method//return a string
let joinNum=num.join(" + ");
console.log('join',joinNum);
// boolean 
let someNum=num.some((ele)=>ele<4);//true
let everyNum=num.every((ele)=>ele<4);//false


// revarse method
let reduceArr=num.reduce((previousValue,currentValue,index,Array)=>previousValue+currentValue);
console.log("reduce",reduceArr);

// slice array//return new array
let sliceNum=num.slice(2,5);
console.log("slice",sliceNum);

//flatmap
let str=['one','two','three']
let numbers=[1,2,3];
let flatMap=str.flatMap((element,index)=>[element,numbers[index]])
console.log("flatMap",flatMap)

//flat: return new array by flatting
let a=[1,2,3,[4],[5]];
let flatA=a.flat();
console.log('flat',flatA)
let b=[1,2,3,[4],[[[[[[[[[[[5]]]]]]]]]]]];
let flatB=b.flat(Infinity);
console.log('flat',flatA)

// sort // return new Array
let sortNum=num.sort((a,b)=>a-b)
console.log(sortNum)

console.log("copy",num.copyWithin(3,2,5))

// to string
console.log(num.toLocaleString())
console.log(num.toString())

//push : add to last //replace the Array
num.push()
console.log("push",num)
// pop : remove first element //replace the Array
num.pop(100)
console.log('pop',num)
//shift : remove first element //replace the Array
num.shift()
console.log("shift",num)
// unshift : add in first element //replace the Array
num.unshift(100)
console.log('unshift',num)


// revarse method
let revarseArr=num.reverse(" + ");
console.log('Revarse',revarseArr);

//fill: replace the arrar
num.fill(00,1,5);
console.log('fillNum',num)
// delete elements by from index to index //replace the Array
num.splice(2,5)