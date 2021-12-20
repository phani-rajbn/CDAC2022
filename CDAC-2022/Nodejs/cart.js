
module.exports = (function(){
   let cart = [];//Here the data is private to the module. It is not available to the outside world.
   
   //Functions created in the module are private, U must expose them using an object notation.
   function add(item){
       cart.push(item)
   }

   function get(){
       return cart;
   }
   function deleteItem(id){
       let item = cart.find((e)=> e.id == id);
       let index = cart.indexOf(item)
       cart.splice(index, 1)
   }
   return{
       addToCart: add,
       getAll : get,
       removeFromCart : deleteItem
   }
})();//U R Returning an object to the caller. 