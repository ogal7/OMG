var totals={
	'American Airlines Inc.':0, 
	'Delta Air Lines Inc.':0, 
	'Southwest Airlines Co.':0, 
	'United Air Lines Inc.':0,
	'Alaska Airlines Inc.':0, 
	'JetBlue Airways':0,
	'Spirit Air Lines':0
};
var list,tyear,tmonth;
//var dataset = {{data|tojson|safe}};
//console.log(dataset);
var requestID,tmonth,tyear,airport;
airport="LAX"
tmonth=1
tyear=2011
var tyearslider = document.getElementById("tyear")
var tmonthslider = document.getElementById("tmonth")
var tyearval = document.getElementById("tyearval");
var tmonthval = document.getElementById("tmonthval");
list_of_airlines = ['American Airlines Inc.', 'Delta Air Lines Inc.', 'Southwest Airlines Co.', 'United Air Lines Inc.','Alaska Airlines Inc.', 'JetBlue Airways','Spirit Air Lines']

var update = function(){
	tyear = tyearval.innerHTML = tyearslider.value;
	tmonth = tmonthval.innerHTML = tmonthslider.value;
	getTotal(airport,tmonth,tyear)
}

tyearslider.addEventListener("onmousedown",update);
tmonthslider.addEventListener("onmousedown",update);


var dyn = d3.select("#dynamic")
	var info = [             
			    [ 'American Airlines Inc.', totals['American Airlines Inc.']]//[airline,totals]
			    ['Delta Air Lines Inc.', totals['Delta Air Lines Inc.']]
			    ['Southwest Airlines Co.',totals['Southwest Airlines Co.']]
			    ['United Air Lines Inc.', totals['United Air Lines Inc.']]
			    ['Alaska Airlines Inc.', totals['Alaska Airlines Inc.']]
			    ['JetBlue Airways', totals['JetBlue Airways']]
			    ['Spirit Air Lines', totals['Spirit Air Lines']]
			]
	dyn.selectAll("div")
    .data(info)
    //.attr("class", "bar")
    .text(function(d) {return d[0]})
    .style("width",function(d){ return d[1]*10 +"px"})
    //.style("height", function(d) {
    //    var barHeight = d[1] * 5;
    //    return barHeight + "px";
    //}
    .enter();
/*
var dyn = d3.select("#totalsdynamic");
			
			dyn.selectAll("div")
			.data(info)
			.style("width", function(d) { return parseInt(d[1]) *80 + "px"})
			.text(function(d) { return d[0]})
			.enter();
			*/



var loadDoc = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	list = JSON.parse(this.responseText);
	console.log(list[0]);
	//totals=getTotal(list,'11','2012');
//	delays=getDelays(list,'11','2005');
	//console.log(totals[0]);
    };
  };
  xhttp.open("GET", "http://127.0.0.1:5000/list/", true);
  xhttp.send();
};

var getTotal = function(airport, month, year){
    var i=0;
    while(i<list.length){
	    if(airport==list[i][0]&&month==list[i][4]&&year==list[i][5]){
		total[list[i][6]]=list[i][3];
		};
		i+=1;
    };
    console.log(total[list[i][6]]);
    return total;
};


window.onload = function(){
	update();
	loadDoc();
}