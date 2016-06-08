/* ========== Functions ========== */

// Returns a random integer between a min and max
function specificRandom(min, max){
	return Math.random() * (max-min) + min;
}

// Fills a store's numCustomers array with a random int between minCust and maxCust
function generateDalyCustomers(store){
	for(var i = 0; i < 18; i++){
		store.numCustomers[i] = Math.floor(specificRandom(store.minCust, store.maxCust));
	}
}

/* ========== Objects ========== */

// Store Objects
var PikePlaceMarket = {
	storeName: "Pike Place Market",
	minCust: 14,
	maxCust: 35,
	cupsPerCust: 1.2,
	toGoPerCust: 0.34,
	numCustomers: [],
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

// Parallel array of hours
var hours = ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];


/* ========== Script ========== */

// Calls generateDalyCustomers on all stores
for(var i = 0; i < allStores.length; i++){
	generateDalyCustomers(allStores[i]);
}

// for(var i = 0; i < allStores.length; i++){
// 	console.log(allStores[i].storeName);
// 	console.log(allStores[i].numCustomers);
// }
