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

	/* ========== Properties ==========*/
	storeName: "Pike Place Market",
	minCust: 14,
	maxCust: 35,
	cupsPerCust: 1.2,
	toGoPerCust: 0.34,
	hours: ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm"],
	numCustomers: [],
	totalCupLBSPerHr: [],
	totalLBSToGo: [],

/* ========== Methods ==========*/
// Fills a store's numCustomers array with a random int between minCust and maxCust
	generateDalyCustomers: function(){
		for(var i = 0; i < 18; i++){
			this.numCustomers[i] = Math.floor(specificRandom(this.minCust, this.maxCust));
			this.totalCupLBSPerHr[i] = this.numCustomers[i] * this.cupsPerCust;
			this.totalLBSToGo[i] = this.numCustomers[i] * this.toGoPerCust;
		}
	},
	createUL: function(){
		var parent = document.getElementsByTagName("section");
		var child = document.createElement("ul");
		var title = document.createElement("h2");
		title.textContent = this.storeName;
		parent[0].appendChild(title);
		console.log(child);
		child.id = this.storeName.replace(/ /g, "");
		console.log(child.id);
		parent[0].appendChild(child);
	},

	createLI: function(){
		var parent = document.getElementsByTagName("ul");

		for(var i = 0; i < this.hours.length; i++){
			var child = document.createElement("li");
			var hour = this.hours[i];
			var totalLBS = ((this.totalCupLBSPerHr[i]) + (this.totalLBSToGo[i])).toFixed(1);
			var customersThisHour = this.numCustomers[i];
			var cupLBSThisHr = this.totalCupLBSPerHr[i];
			var lbsToGoThisHr = this.totalLBSToGo[i];

			child.textContent = (hour + ": " + totalLBS + " [" + customersThisHour + " customers, " + (cupLBSThisHr.toFixed(1)) + " cups (" + ((cupLBSThisHr/16).toFixed(1)) + "lbs), " + (this.totalLBSToGo[i].toFixed(1))+ " lbs to-go]");

			console.log(child);
			parent[0].appendChild(child);
		}

	}
};

var CapitolHill = {
	storeName: "Capitol Hill",
	minCust: 12,
	maxCust: 28,
	cupsPerCust: 3.2,
	toGoPerCust: 0.03,
	numCustomers: [],


};

var SeattlePublicLibrary = {
	storeName: "Seattle Public Library",
	minCust: 9,
	maxCust: 45,
	cupsPerCust: 2.6,
	toGoPerCust: 0.02,
	numCustomers: [],


};

var SouthLakeUnion = {
	storeName: "South Lake Union",
	minCust: 5,
	maxCust: 18,
	cupsPerCust: 1.3,
	toGoPerCust: 0.04,
	numCustomers: [],


};

var SeaTacAirport = {
	storeName: "Sea-Tac Airport",
	minCust: 28,
	maxCust: 44,
	cupsPerCust: 1.1,
	toGoPerCust: 0.41,
	numCustomers: [],


};

/* ========== Global Variables ========== */

// Array of all stores
var allStores = [PikePlaceMarket, CapitolHill, SeattlePublicLibrary, SouthLakeUnion, SeaTacAirport];


/* ========== Script ========== */

// Calls generateDalyCustomers on all stores
for(var i = 0; i < allStores.length; i++){
	PikePlaceMarket.generateDalyCustomers();
}

createSection();
PikePlaceMarket.createUL();
PikePlaceMarket.createLI();

// for(var i = 0; i < allStores.length; i++){
// 	console.log(allStores[i].storeName);
// 	console.log(allStores[i].numCustomers);
// }
