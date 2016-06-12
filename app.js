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

function initTable(sectionID, tableID, name){
	var hourArray = ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"];

	// Makes Table Title
	var parentSection = document.getElementById(sectionID);
	var tableTitle = document.createElement("h2");
	tableTitle.textContent = name;
	parentSection.appendChild(tableTitle);

	// Makes Table
	var parentSection = document.getElementById(sectionID);
	var table = document.createElement("table");
	table.id = tableID;
	parentSection.appendChild(table);

	// Makes Table Header
	var parentTable = document.getElementById(tableID);
	var tableHeader = document.createElement("thead");
	tableHeader.id = tableID + "-tHead";
	parentTable.appendChild(tableHeader);

	// Makes Row
	var parentTHead = document.getElementById(tableHeader.id);
	var tr = document.createElement("tr");
	tr.id = tableHeader.id + "-tr";

	// Fills Header
		// Store Name Column
	var parentTRow = document.getElementById(tr.id);
	var td = document.createElement("td");
	td.textContent = "Store Name";
	parentTHead.appendChild(td);

		// Total column
	var parentTRow = document.getElementById(tr.id);
	var td = document.createElement("td");
	td.textContent = "Total";
	parentTHead.appendChild(td);

	// Hours
	for(var i = 0; i < hourArray.length; i++){
		parentTRow = document.getElementById(tr.id);
		td = document.createElement("td");
		td.textContent = (hourArray[i]);
		parentTHead.appendChild(td);
	}

	// Makes tBody
	// Makes tbody
	parentTable = document.getElementById(tableID);
	tBody = document.createElement("tbody");
	tBody.id = (sectionID + "-" + tableID + "-" + "tBody");
	parentTable.appendChild(tBody);


}

function createFooter(sectionID, tableID, units) {
	var totalyTotal = 0;
	var hourArray = ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"];
	var footerArray = [];
	for(var y = 0; y < hourArray.length; y++){
		footerArray[y] = 0.0;
		for(var z = 0; z < shopArray.length; z++){
			footerArray[y] += shopArray[z].totalLbsOfBoth[y];
		}
	}

	// Initializes footer
	var parentTable = document.getElementById(tableID);
	var tableFooter = document.createElement("tfoot");
	tableFooter.id = tableID + "-tfoot";
	parentTable.appendChild(tableFooter);

	// Total row
	var parentFooter = document.getElementById(tableFooter.id);
	var totalRow = document.createElement("tr");
	totalRow.id = tableID + "-tfoot-" + "tr";
	parentFooter.appendChild(totalRow);

	// Total text box
	var parentTotalRow = document.getElementById(totalRow.id);
	var td = document.createElement("td");
	td.textContent = "Total";
	parentTotalRow.appendChild(td);

	// Makes and adds total value
	for(var t = 0; t < footerArray.length; t++){
		totalyTotal += footerArray[t];
	}
	console.log(totalyTotal);
	parentTotalRow = document.getElementById(totalRow.id);
	td = document.createElement("td");
	td.textContent = totalyTotal.toFixed(2) + " " + units;
	parentTotalRow.appendChild(td);

	console.log(footerArray);
	for(var t = 0; t < hourArray.length; t++){
		parentTotalRow = document.getElementById(totalRow.id);
		td = document.createElement("td");
		td.textContent = footerArray[t].toFixed(2);
		parentTotalRow.appendChild(td);
	}
	// return footerArray;
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
	this.numBaristasPerHr = [];
	this.dailyTotal = 0;
	this.totalBaristas = 0;

	// Methods
	this.generateRandomNumbers = function(){
		for(var i = 0; i < this.hourArray.length; i++){
			this.customersThisHour[i] = specificRandom(this.minCuststomerPerHr, this.maxCustomerPerHr);
			this.lbsOfLiqCoffee[i] = this.customersThisHour[i] * this.cupsPerCustomer;
			this.lbsOfSolidCoffee[i] = this.customersThisHour[i] * this.toGoCupsPerCustomer;
			this.totalLbsOfBoth[i] = this.lbsOfLiqCoffee[i] + this.lbsOfSolidCoffee[i];
			this.numBaristasPerHr[i] = this.totalLbsOfBoth[i] * 2 / 60;
		}
	},


	// Fills store's coffee usage row
	this.resourceData = function(sectionID, tableID){

		// Makes Store Row
		var parentTBody = document.getElementById(sectionID + "-" + tableID + "-" + "tBody");
		var tr = document.createElement("tr");
		tr.id = sectionID + "-" + tableID + "-" + "tBody" + "-tr-" + this.storeName.replace(/ /g, "");
		parentTBody.appendChild(tr);

			// Store Name
		var parentTRow = document.getElementById(tr.id);
		var td = document.createElement("td");
		td.textContent = this.storeName;
		parentTRow.appendChild(td);

			// Daily Total
		parentTRow = document.getElementById(tr.id);
		td = document.createElement("td");

		for(i = 0; i < this.hourArray.length; i++){
			this.dailyTotal += this.totalLbsOfBoth[i];
		}
		td.textContent = this.dailyTotal.toFixed(2) + " lbs";
		parentTRow.appendChild(td);

			// Hourly Total
		for(i = 0; i < this.hourArray.length; i++){
			parentTRow = document.getElementById(tr.id);
			td = document.createElement("td");
			td.textContent = (this.totalLbsOfBoth[i]).toFixed(2) + " lbs";
			parentTRow.appendChild(td);
		// End
		}
	}

	// Fill store's necessary labor row

	// Makes Store Row
	this.laborData = function(sectionID, tableID){
		var parentTBody = document.getElementById(sectionID + "-" + tableID + "-" + "tBody");
		var tr = document.createElement("tr");
		tr.id = sectionID + "-" + tableID + "-" + "tBody" + "-tr-" + this.storeName.replace(/ /g, "");
		parentTBody.appendChild(tr);

			// Store Name
		var parentTRow = document.getElementById(tr.id);
		var td = document.createElement("td");
		td.textContent = this.storeName;
		parentTRow.appendChild(td);

			// Daily Total
		parentTRow = document.getElementById(tr.id);
		td = document.createElement("td");

		for(i = 0; i < this.hourArray.length; i++){
			this.totalBaristas += this.totalLbsOfBoth[i] * 2 / 60;
		}
		td.textContent = this.totalBaristas.toFixed(2) + " hrs";
		parentTRow.appendChild(td);

			// hourly total
		for(i = 0; i < this.hourArray.length; i++){
			parentTRow = document.getElementById(tr.id);
			td = document.createElement("td");
			td.textContent = (this.numBaristasPerHr[i]).toFixed(2) + " hrs";
			parentTRow.appendChild(td);
		}
		// End
	}
}

/* ========== Script ========== */


// Here it goes
PikePlaceMarket = new store("Pike Place Market", 14, 35, 1.2, 0.34);
CapitolHill = new store("Capitol Hill", 12, 28, 3.2, 0.03);
SeattlePublicLibrary = new store("Seattle Public Library", 9, 45, 2.6, 0.02);
SouthLakeUnion = new store("SouthLakeUnion", 5, 18, 1.3, 0.04);
SeaTacAirport = new store("Sea-Tac Airport", 28, 44, 1.1, 0.41);

var shopArray = [PikePlaceMarket, CapitolHill, SeattlePublicLibrary, SouthLakeUnion, SeaTacAirport];





initTable("beanSection", "beanTable", "Beans Needed");

initTable("baristaSection", "baristaTable", "Baristas Needed");

for(var x = 0; x < shopArray.length; x++){
	shopArray[x].generateRandomNumbers();
	shopArray[x].resourceData("beanSection", "beanTable");
	shopArray[x].laborData("baristaSection", "baristaTable");
}

createFooter("beanSection", "beanTable", "lbs");
createFooter("baristaSection", "baristaTable", "hrs");

// var test = createFooter();
// for(var d = 0; d < test.length; d++){
// 	test[d] = test[d].toFixed(2);
// }
// console.log(test);








//end
