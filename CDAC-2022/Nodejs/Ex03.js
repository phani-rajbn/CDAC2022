//This demo will show how to use the cart Class created in the Cart.js export module. 
const amazon = require("./cart")

///////////////Client app for the Cart App/////////////
amazon.addToCart({ 'id': 1, 'name': "Samsung Note 10", 'price': 45000 })
amazon.addToCart({'id': 2, 'name': "Mi Note 10", 'price': 15000})
amazon.addToCart({'id': 3, 'name': "Samsung A51", 'price': 35000})
amazon.addToCart({'id': 4, 'name': "Nokia Simple", 'price': 1000})
amazon.addToCart({ 'id': 5, 'name': "Jio Phone", 'price': 4500 })

amazon.removeFromCart(3);

const itemsPurchased = amazon.getAll();//Returns an array

itemsPurchased.forEach(function(eachItem){
    console.log(eachItem)
})

for (const item of itemsPurchased) {
    console.log(`${item.name} costs ${item.price}`)
}
