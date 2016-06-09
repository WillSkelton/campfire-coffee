/* ========== Functions ========== */

// Returns a random integer between a min and max
function specificRandom(min, max){
	return Math.random() * (max-min) + min;
}




function createSection(){
	var parent = document.getElementsByTagName("body");
	var child = document.createElement("section");
	console.log(child);
	parent[0].appendChild(child);
}



/* ========== Objects ========== */

// Store Objects
var PikePlaceMarket = {
	/* ========= Values ========= */
	storeName: "Pike Place Market",
	hourArray: ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"],
	minCuststomerPerHr: 14,
	maxCustomerPerHr: 35,
	cupsPerCustomer: 1.2,
	toGoCupsPerCustomer: 0.34,
	customersThisHour: [],
	lbsOfLiqCoffee: [],
	lbsOfSolidCoffee: [],
	totalLbsOfBoth: [],
	/* ========= Methods ========= */
	generateRandomNumbers: function(){
		for(var i = 0; i < this.hourArray.length; i++){
			this.customersThisHour[i] = specificRandom(this.minCuststomerPerHr, this.maxCustomerPerHr);
			this.lbsOfLiqCoffee[i] = this.customersThisHour[i] * this.cupsPerCustomer;
			this.lbsOfSolidCoffee[i] = this.customersThisHour[i] * this.toGoCupsPerCustomer;
			this.totalLbsOfBoth[i] = this.lbsOfLiqCoffee[i] + this.lbsOfSolidCoffee[i];
		}
	},

	createUL: function(){
		var parent = document.getElementsByTagName("section");

		var child = document.createElement("ul");
		child.id = this.storeName.replace(/ /g, "");
		console.log(child.id);

		var title = document.createElement("h2");
		title.textContent = this.storeName;


		parent[0].appendChild(title);
		parent[0].appendChild(child);
	},

	createLI: function(){
		var parent = document.getElementById(this.storeName.replace(/ /g, "") );

		for(var i = 0; i < this.hourArray.length; i++){
			var child = document.createElement("li");

			child.textContent = (this.hourArray[i] + ": ");
			child.textContent += (this.totalLbsOfBoth[i].toFixed(1) + " lbs ");
			child.textContent += ("[" + (this.customersThisHour[i].toFixed(0)) + " customers, ");
			child.textContent += ((this.lbsOfLiqCoffee[i].toFixed(1)) + " cups (" + ((this.lbsOfLiqCoffee[i]/16).toFixed(1)) + " lbs), ");
			child.textContent += ((this.lbsOfSolidCoffee[i]).toFixed(1) + " lbs to-go]");

			console.log(child);
			console.log(parent);
			parent.appendChild(child);
		}
	}
};

var CapitolHill = {
	/* ========= Values ========= */
	storeName: "Capitol Hill",
	hourArray: ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"],
	minCuststomerPerHr: 12,
	maxCustomerPerHr: 28,
	cupsPerCustomer: 3.2,
	toGoCupsPerCustomer: 0.03,
	customersThisHour: [],
	lbsOfLiqCoffee: [],
	lbsOfSolidCoffee: [],
	totalLbsOfBoth: [],
	/* ========= Methods ========= */
	generateRandomNumbers: function(){
		for(var i = 0; i < this.hourArray.length; i++){
			this.customersThisHour[i] = specificRandom(this.minCuststomerPerHr, this.maxCustomerPerHr);
			this.lbsOfLiqCoffee[i] = this.customersThisHour[i] * this.cupsPerCustomer;
			this.lbsOfSolidCoffee[i] = this.customersThisHour[i] * this.toGoCupsPerCustomer;
			this.totalLbsOfBoth[i] = this.lbsOfLiqCoffee[i] + this.lbsOfSolidCoffee[i];
		}
	},

	createUL: function(){
		var parent = document.getElementsByTagName("section");

		var child = document.createElement("ul");
		child.id = this.storeName.replace(/ /g, "");
		console.log(child.id);

		var title = document.createElement("h2");
		title.textContent = this.storeName;


		parent[0].appendChild(title);
		parent[0].appendChild(child);
	},

	createLI: function(){
		var parent = document.getElementById(this.storeName.replace(/ /g, "") );

		for(var i = 0; i < this.hourArray.length; i++){
			var child = document.createElement("li");

			child.textContent = (this.hourArray[i] + ": ");
			child.textContent += (this.totalLbsOfBoth[i].toFixed(1) + " lbs ");
			child.textContent += ("[" + (this.customersThisHour[i].toFixed(0)) + " customers, ");
			child.textContent += ((this.lbsOfLiqCoffee[i].toFixed(1)) + " cups (" + ((this.lbsOfLiqCoffee[i]/16).toFixed(1)) + " lbs), ");
			child.textContent += ((this.lbsOfSolidCoffee[i]).toFixed(1) + " lbs to-go]");

			console.log(child);
			console.log(parent);
			parent.appendChild(child);
		}
	}
};;

var SeattlePublicLibrary = {
	/* ========= Values ========= */
	storeName: "Seattle Public Library",
	hourArray: ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"],
	minCuststomerPerHr: 9,
	maxCustomerPerHr: 45,
	cupsPerCustomer: 2.6,
	toGoCupsPerCustomer: 0.02,
	customersThisHour: [],
	lbsOfLiqCoffee: [],
	lbsOfSolidCoffee: [],
	totalLbsOfBoth: [],
	/* ========= Methods ========= */
	generateRandomNumbers: function(){
		for(var i = 0; i < this.hourArray.length; i++){
			this.customersThisHour[i] = specificRandom(this.minCuststomerPerHr, this.maxCustomerPerHr);
			this.lbsOfLiqCoffee[i] = this.customersThisHour[i] * this.cupsPerCustomer;
			this.lbsOfSolidCoffee[i] = this.customersThisHour[i] * this.toGoCupsPerCustomer;
			this.totalLbsOfBoth[i] = this.lbsOfLiqCoffee[i] + this.lbsOfSolidCoffee[i];
		}
	},

	createUL: function(){
		var parent = document.getElementsByTagName("section");

		var child = document.createElement("ul");
		child.id = this.storeName.replace(/ /g, "");
		console.log(child.id);

		var title = document.createElement("h2");
		title.textContent = this.storeName;


		parent[0].appendChild(title);
		parent[0].appendChild(child);
	},

	createLI: function(){
		var parent = document.getElementById(this.storeName.replace(/ /g, "") );

		for(var i = 0; i < this.hourArray.length; i++){
			var child = document.createElement("li");

			child.textContent = (this.hourArray[i] + ": ");
			child.textContent += (this.totalLbsOfBoth[i].toFixed(1) + " lbs ");
			child.textContent += ("[" + (this.customersThisHour[i].toFixed(0)) + " customers, ");
			child.textContent += ((this.lbsOfLiqCoffee[i].toFixed(1)) + " cups (" + ((this.lbsOfLiqCoffee[i]/16).toFixed(1)) + " lbs), ");
			child.textContent += ((this.lbsOfSolidCoffee[i]).toFixed(1) + " lbs to-go]");

			console.log(child);
			console.log(parent);
			parent.appendChild(child);
		}
	}
};
/* ========== Global Variables ========== */

// Array of all stores
//var allStores = [PikePlaceMarket, CapitolHill, SeattlePublicLibrary, SouthLakeUnion, SeaTacAirport];


/* ========== Script ========== */

createSection();
//Calls generateRandomNumbers on all stores
PikePlaceMarket.generateRandomNumbers();
PikePlaceMarket.createUL();
PikePlaceMarket.createLI();

CapitolHill.generateRandomNumbers();
CapitolHill.createUL();
CapitolHill.createLI();

SeattlePublicLibrary.generateRandomNumbers();
SeattlePublicLibrary.createUL();
SeattlePublicLibrary.createLI();

// console.log(PikePlaceMarket.customersThisHour);
// console.log(PikePlaceMarket.lbsOfLiqCoffee);
// console.log(PikePlaceMarket.lbsOfSolidCoffee);
// console.log(PikePlaceMarket.totalLbsOfBoth);


// SeaTacAirport.createUL();
// SeaTacAirport.createLI();

// for(var i = 0; i < allStores.length; i++){
// 	console.log(allStores[i].storeName);
// 	console.log(allStores[i].numCustomers);
// }
