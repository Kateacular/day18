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



var clothingItems = function(type,color,price,stock,notes){
	this.type = type;
	this.color = color;
	this.price = price;
	this.stock = stock;
	this.notes = notes;
};

var populateArray = function() {
  var clothing1 = new clothingItems("Pants","Orange","145","27","wash on cold");
  var clothing2 = new clothingItems("Pants","Blue","115","14","itchy. Not recommended.");
  var clothing3 = new clothingItems("Hat","Violet","15","7","wool/poly blend");
  inventory.push(clothing1);
  inventory.push(clothing2);
  inventory.push(clothing3);
};



var exit = function(){
	console.log("Thank you for visiting!\nGoodbye!");
	process.exit();
};

var addItem = function() {
	var clothingType = sget("What type of garment is this? (i.e. 'Pants')").trim();
	var clothingColor = sget ("What color is this garment?").trim();
	var clothingPrice = sget("What is the price of this item?").trim();
	var clothingStock = sget("How many of this item are in stock?").trim();
	var clothingNotes = sget("Any notes about this garment?").trim();
	var newClothing = new clothingItems(clothingType, clothingColor, clothingPrice, clothingStock, clothingNotes);
	inventory.forEach(function(currentClothing) {
    	if (clothingType == currentClothing.type && clothingColor == currentClothing.color) {
            console.log("You already have that combination.\nTry altering the inventory count instead of adding the same item.");
            showMenu();
            } 
    });
    inventory.push(newClothing);
    showMenu();  
};

var deleteItem = function() {
	var i = 1;
	inventory.forEach(function(currentClothing) {
		console.log(i + ":  Type: " + currentClothing.type + "\nColor: " + currentClothing.color + ", $" + currentClothing.price + "\nQuantity: " + currentClothing.stock + "\nNotes: " + currentClothing.notes + " \n");
		i++;
	});

	var removeClothing = sget("Select the number of the clothing item to remove.").trim();

	var indexOfClothingToRemove = removeClothing-1;
	inventory.splice(indexOfClothingToRemove, 1);
	showMenu();

};

var searchItem = function() {
	var lookupEntry = sget().trim();
};

var editQuantity = function() {
	var alterEntry = sget().trim();
};

var editDescription = function() {
	var alterEntry = sget().trim();
};


var showMenu = function(){
	console.log("\nWelcome to the Ortyki Boutique!\n");
	var selectedOption = sget("What would you like to do?\n\nSelect 1 to Add an Item.\n\nSelect 2 to Delete an Item.\n\nSelect 3 to Search for an Item.\n\nSelect 4 to Edit Item Quantity.\n\nSelect 5 to edit Item Descriptions.\n\nSelect 6 to Exit.").trim();
		if(selectedOption == 1){
			addItem();
		}else if (selectedOption == 2){
			deleteItem();
		}else if (selectedOption == 3){
			searchItem();	
		}else if (selectedOption == 4){
			editQuantity();
		}else if (selectedOption == 5){
			editDescription();
		}else if (selectedOption == 6){
			exit();
		}else {
			console.log("Invalid selection. Try again.");
			showMenu();
		}
};

var run = function(){
	populateArray();
	showMenu();
};

run();


