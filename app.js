


// fx(airport, year) get total flights
// fx(airport, year) get delays
// fx(airport, year) get flights info return ["cancelled","on time", total, delayed diverted]
// fx(airport, year) get delays info
  //return [late aircraft, weather, security, national aviation system

//d3 stuff dynamic
//link circles with their airport data
//create bar graph with d3

var totalscontainer = document.getElementById("totals");
var delayscontainer = document.getElementById("delays");
var reqId;

/*
var change = function(e) {
	console.log("haha");
	if (this.getAttribute("fill") == "pink") {
		container.removeChild(this);
		var c = createCircle(Math.random()*500,Math.random()*500);	
		container.appendChild(c);
		e.stopPropagation();
	}
	else {
		this.setAttribute("fill", "pink");
		e.stopPropagation();
	}	
}
*/

var createCircle = function (x,y,r) {
	var c =	document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "blue");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", r);    
    c.addEventListener("click", change);   //change to redirect to graphs
    return c;
}

/* 
var clear = function() {
	var list = document.getElementsByTagName("circle");
	while (list.length != 0) {
		container.removeChild(list[0]);
	}
}
*/

/*use json to get data from python
cancelled = 
ontime=
delayed=
diverted=
*/

var dyn = d3.select("#totalsdynamic");
			var info = [             
						[ 'cancelled'],
						[ 'on time'],
						[ 'delayed'], 
						[ 'diverted']
					]
			dyn.selectAll("div")
			.data(info)
			.style("width", function(d) { return parseInt(d[0]) *80 + "px"})
			.text(function(d) { return d[1]})
			.enter();

/*another js file for delays
var dyn = d3.select("#delaysdynamic");
			var info = [             
						[ 'lateaircraft'],
						[ 'security'],
						[ 'weather'], 
						[ 'national aviation system']
						[ 'carrier']
					]
			dyn.selectAll("div")
			.data(info)
			.style("width", function(d) { return parseInt(d[0]) *80 + "px"})
			.text(function(d) { return d[1]})
			.enter();
			*/