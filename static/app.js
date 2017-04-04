

//* use slider to update month and year variables

// fx(airport, year) get total flights
// fx(airport, year) get delays
// fx(airport, year) get flights info return ["cancelled","on time", total, delayed diverted]
// fx(airport, year) get delays info
  //return [late aircraft, weather, security, national aviation system

//d3 stuff dynamic
//link circles with their airport data
//create bar graph with d3

var totals=[];
var delays=[];
var totalscontainer = document.getElementById("totals");
var delayscontainer = document.getElementById("delays");
var reqId,tmonth,tyear,dyear,dmonth,airport;
var tyearslider = document.getElementById("tyear")
var tmonthslider = document.getElementById("tmonth")
//var dyearslider = document.getElementById("dyear")
//var dmonthslider = document.getElementById("dmonth")
//var tyearinput = document.getElementById("tyear");
//var tmonthinput = document.getElementById("tmonth");
var tyearval = document.getElementById("tyearval");
var tmonthval = document.getElementById("tmonthval");
var coords ={
	"ORD":[390,190],
	"LAX":[100,300],
	"ATL":[500,300],
	"JFK":[600,180],
	"DFW":[325,380],
	"LAS":[150,270],
	"SFO":[50,210],
	"DEN":[200,270],
	"EWR":[600,180]
}
list_of_airlines = ['American Airlines Inc.', 'Delta Air Lines Inc.', 'Southwest Airlines Co.', 'United Air Lines Inc.','Alaska Airlines Inc.', 'JetBlue Airways','Spirit Air Lines']

var update = function(slideAmount){
	tmonth = tmonthval.innerHTML = tmonthslider.value;
	tyear = tyearval.innerHTML = tyearslider.value;
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
var loadDoc = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	var list = JSON.parse(this.responseText);
	console.log(list[0]);
	totals=getTotal(list);
	delays=getDelays(list);
    };
  };
  xhttp.open("GET", "http://127.0.0.1:5000/list/", true);
  xhttp.send();
};
/*
var getTotal = function(list, month, year, airport){
    var i,j,k,total;
	while(i<list.length){
		if (airport in list[i]){
				for data in list[j][airport]{
					if (month==list[i][airport][3] && year==list[i][airport][4])
						total=list[i][airports[i][airport][2];
					}
				}
			}
		}
	return total;
}
*/
var getTotal=function(list, month, year){
    var totals=[0,0,0,0,0,0,0,0,0];
    var airports=['ORD','LAX','JFK', 'ATL','DFW','LAS','SFO','DEN','EWR' ];
    var i=0;
    while(i<totals.len){
	var j=0;
	while(j<list[airports[i]].len){
	    if((month==list[airports[i]][3])&&(year=list[airports[i]][4])){
		totals[i]+=list[airports[i]][2];
	    };
    };
    return totals;
};

var getDelays=function(list, month, year){
    var delays=[0,0,0,0,0,0,0,0,0];
    var airports=['ORD','LAX','JFK', 'ATL','DFW','LAS','SFO','DEN','EWR' ];
    var i=0;
    while(i<totals.len){
	var j=0;
	while(j<list[airports[i]].len){
	    if(month==list[airports[i]][3]&&year==list[airports[i]][4]){
		delays[i]+=list[airports[i]][1];
	    };
    };
    return delays;
};

var createCircle = function (x,y,r,airport) {
	var c =	document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "blue");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", r);
    c.setAttribute("code",airport);
    //c.addEventListener("click", change);   //change to redirect to graphs
    return c;
}

totalscontainer.appendChild(createCircle(600.180,30));
d3.selectAll("circle").on("click", function(){ window.location.href="/totals/"});

for(var code in coords){
	var x = coords[code][0];
	var y = coords[code][1];
	var r = 15; //should be proportional to total flights
	var airport = code;
	newCirc = createCircle(x,y,r,airport);
	totalscontainer.appendChild(newCirc);
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
