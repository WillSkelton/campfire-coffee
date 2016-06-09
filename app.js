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
			this.totalLbsOfBoth[i] = this.lbsOfLiqCoffee[i] * this.lbsOfSolidCoffee[i];
		}
	}
};


/* ========== Global Variables ========== */

// Array of all stores
//var allStores = [PikePlaceMarket, CapitolHill, SeattlePublicLibrary, SouthLakeUnion, SeaTacAirport];


/* ========== Script ========== */

//Calls generateRandomNumbers on all stores
	PikePlaceMarket.generateRandomNumbers();

console.log(PikePlaceMarket.customersThisHour);

createSection();

// SeaTacAirport.createUL();
// SeaTacAirport.createLI();

// for(var i = 0; i < allStores.length; i++){
// 	console.log(allStores[i].storeName);
// 	console.log(allStores[i].numCustomers);
// }
