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
function createTable(){
	hours = ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"];

	// Makes <table>
	var parent = document.getElementsByTagName("section");
	var child = document.createElement("table");
	parent[0].appendChild(child);

	// Makes <thead>
	parent = document.getElementsByTagName("table");
	child = document.createElement("thead");
	parent[0].appendChild(child);

	// Makes <tr>
	parent = document.getElementsByTagName("thead");
	child = document.createElement("tr");
	parent[0].appendChild(child);

	// Makes <td> for all hours
	for(var i = 0; i < hours.length; i++){
		parent = document.getElementsByTagName("tr");
		child = document.createElement("td");
		child.textContent = hours[i];
		parent[0].appendChild(child);
	}
}


/* ========== Constructor ========== */
function store(name, min, max, cPC, tGCPC){
	// Passed in
	this.storeName = name;
	this.minCuststomerPerHr = min;
	this.maxCustomerPerHr = max;
	this.cupsPerCustomer = cPC;
	this.toGoCupsPerCustomer = tGCPC;

	// inate
	this.hourArray = ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"];
	this.customersThisHour = [];
	this.lbsOfLiqCoffee = [];
	this.lbsOfSolidCoffee = [];
	this.totalLbsOfBoth = [];
	// Methods
	this.generateRandomNumbers = function(){
		for(var i = 0; i < this.hourArray.length; i++){
			this.customersThisHour[i] = specificRandom(this.minCuststomerPerHr, this.maxCustomerPerHr);
			this.lbsOfLiqCoffee[i] = this.customersThisHour[i] * this.cupsPerCustomer;
			this.lbsOfSolidCoffee[i] = this.customersThisHour[i] * this.toGoCupsPerCustomer;
			this.totalLbsOfBoth[i] = this.lbsOfLiqCoffee[i] + this.lbsOfSolidCoffee[i];
		}
	},

	this.createUL = function(){
		var parent = document.getElementsByTagName("section");

		var child = document.createElement("ul");
		child.id = this.storeName.replace(/ /g, "");
		// console.log(child.id);

		var title = document.createElement("h2");
		title.textContent = this.storeName;


		parent[0].appendChild(title);
		parent[0].appendChild(child);
	},

	this.createLI = function(){
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

}

/* ========== Script ========== */

createSection();
createTable();

// Here it goes
PikePlaceMarket = new store("Pike Place Market", 14, 35, 1.2, 0.34);
CapitolHill = new store("Capitol Hill", 12, 28, 3.2, 0.03);
SeattlePublicLibrary = new store("Seattle Public Library", 9, 45, 2.6, 0.02);
SouthLakeUnion = new store("SouthLakeUnion", 5, 18, 1.3, 0.04);
SeaTacAirport = new store("Sea-Tac Airport", 28, 44, 1.1, 0.41);

var shopArray = [PikePlaceMarket, CapitolHill, SeattlePublicLibrary, SouthLakeUnion, SeaTacAirport];

// for(var i = 0; i < shopArray.length; i++){
// 	shopArray[i].generateRandomNumbers();
// 	shopArray[i].createUL();
// 	shopArray[i].createLI();
// }










//end
