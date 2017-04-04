

//* use slider to update month and year variables

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
var reqId,month,year,airport;
var tyearslider = document.getElementById("tyear")
var tmonthslider = document.getElementById("tmonth")
//var dyearslider = document.getElementById("dyear")
//var dmonthslider = document.getElementById("dmonth")
var tyearinput = document.getElementById("tyear");
var tmonthinput = document.getElementById("tmonth");

var tyearval = document.getElementById("tyearval");
var tmonthval = document.getElementById("tmonthval");


var update = function(slideAmount){
	tyearval.innerHTML = tyearslider.value;
}

var update2 = function(slideAmount){
	tmonthval.innerHTML = tmonthslider.value;
}


tyearinput.addEventListener("onmousedown",update);
tmonthinput.addEventListener("onmousedown",update2);


/*
var change = function(e) {
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
    //c.addEventListener("click", change);   //change to redirect to graphs
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

/*use ajax to get data from python

var getTotals = function(airline){
    //for thing in finallist{
    //if (finallist[apName] == airport &&         //airport, month, year are global variables         
   	//finallist[airline] == airport &&
    //finalllist[month] == month &&
    //finallist[year] == year) return totals;
	return -1;
}

var dyn = d3.select("#totalsdynamic");
			var info = [             
			    [ 'American Airlines Inc.', getTotals(airline,month,year)]//[airline,totals]
			    ['Delta Air Lines Inc.', getTotals(airline,month,year)]
			    ['Southwest Airlines Co.', getTotals(airline,month,year)]
			    ['United Air Lines Inc.', getTotals(airline,month,year)]
			    ['Alaska Airlines Inc.', getTotals(airline,month,year)] 
			    ['JetBlue Airways', getTotals(airline,month,year)]
			    ['Spirit Air Lines', getTotals(airline,month,year)]
			]
			dyn.selectAll("div")
			.data(info)
			.style("width", function(d) { return parseInt(d[1]) *80 + "px"})
			.text(function(d) { return d[0]})
			.enter();

another js file for delays
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
window.onload = function(){
	update();
}