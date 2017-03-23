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



var sget = require("sget");


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

var addItem = function() {
	var addedEntry = sget().trim();
};

var deleteItem = function() {
	var deletedEntry = sget().trim();
};

var searchItem = function() {
	var lookupEntry = sget().trim();
};

var editItem = function() {
	var alterEntry = sget().trim();
};


var showMenu = function(){
	console.log("\nWelcome to the Ortyki Boutique!\n");
	var selectMenuOption = sget("What would you like to do?\n\nSelect 1 to Add and Item.\n\nSelect 2 to Delete an Item.\n\nSelect 3 to Search for an Item.\n\nSelect 5 to Exit.").trim();
		if(selectedOption == 1){
			addItem();
		}else if (selectedOption == 2){
			deleteItem();
		}else if (selectedOption == 3){
			searchItem();	
		}else if (selectedOption == 4){
			deleteItem();
		}else if (selectedOption == 5){
			deleteItem();
		}else if (selectedOption == 6){
			deleteItem();
		}else {
			console.log("Invalid selection. Try again.");
			showMenu();
		}
};


