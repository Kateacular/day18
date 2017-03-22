// - Create an inventory application for a retail store
// - Each item in the inventory should be represented by an object, 
// which should store 
// a description of the item, 
// the price of the item, 
// and the number of items in stock
// - Users should be able to 
// add an item, 
// delete an item, 
// search for an item, 
// modify the number of items available, 
// and change an item’s description

// ***********






var inventory = [];



var clothingItems = function(type,price,stock){
	this.type = type;
	this.price = price;
	this.stock = stock;
};

var exit = function(){
	console.log("Thank you for visiting!\nGoodbye!");
	process.exit();
};