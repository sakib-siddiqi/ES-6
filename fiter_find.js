let products = [
    { name: 'product 1', price: 10 },
    { name: 'product 2', price: 20 },
    { name: 'product 3', price: 30 },
    { name: 'product 4', price: 40 },
    { name: 'product 5', price: 50 },
    { name: 'product 6', price: 60 }
]
let chipProduct=products.filter(product=>product.price<30);
let findProduct=products.find(product=>product.price<50);
console.log(chipProduct)
console.log(findProduct)