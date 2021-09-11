let products = [
    { name: 'product 1', price: 10 },
    { name: 'product 2', price: 20 },
    { name: 'product 3', price: 30 },
    { name: 'product 4', price: 40 },
    { name: 'product 5', price: 50 },
    { name: 'product 6', price: 60 }
]
let productPrice = products.map(product => product.price);
products.forEach(product => console.log(product.price))


products = products.map(product => {
    product.price = product.price + 2;
    return product;
}
)
console.log(products);
products.forEach(product => console.log(product.price))

