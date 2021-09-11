const products = [
  { type: "laptop", price: 30000 },
  { type: "phone", price: 3000 },
  { type: "watch", price: 300 },
  { type: "food", price: 30 },
  { type: "choco", price: 3 },
];
// add
const newProduct = { type: "pc", price: 3000000 };
const newProducts=[...products,newProduct]
console.log(newProducts)


// remove
const removed=products.filter(p=>p.price>3);
console.log(removed)
