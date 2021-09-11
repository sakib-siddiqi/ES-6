// distructring
let people=['sakib','sami','era'];
const [sakib,sami,era]=[...people];//spread operator
console.log(sakib);

// map filter find
const products=[
    {type:'laptop',price:30000},
    {type:'phone',price:3000},
    {type:'watch',price:300},
    {type:'food',price:30},
    {type:'choco',price:3},
]
const productsTypes=products.map(product=>product.type);
const productsPrices=products.map(product=>product.price);
const productsPricesFilter=productsPrices.filter(e=>e>300);
const productsPricesFind=productsPrices.find(e=> e===300);

console.log(productsPricesFind)

//foreach
products.forEach(e=>console.log(e.price));