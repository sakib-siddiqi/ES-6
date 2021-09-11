// obj distucturing
let me={
    name:"sakib",
    age:20,
    job:false,
    language:['html','css','js']
}
const {name,age,job}=me;
console.log(age)
const [one,two,three]=me?.language;
console.log(one)