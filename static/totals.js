var totals=[];
var delays=[];
var dataset;
var requestID,tmonth,tyear,airport;
var tyearslider = document.getElementById("tyear")
var tmonthslider = document.getElementById("tmonth")
var tyearval = document.getElementById("tyearval");
var tmonthval = document.getElementById("tmonthval");
list_of_airlines = ['American Airlines Inc.', 'Delta Air Lines Inc.', 'Southwest Airlines Co.', 'United Air Lines Inc.','Alaska Airlines Inc.', 'JetBlue Airways','Spirit Air Lines']

var update = function(){
	tyear = tyearval.innerHTML = tyearslider.value;
	tmonth = tmonthval.innerHTML = tmonthslider.value;
}

tyearslider.addEventListener("onmousedown",update);
tmonthslider.addEventListener("onmousedown",update);

/*
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
			*/
var getTotal = function(list, month, year){
    var total=[0,0,0,0,0,0,0,0,0];
    var airports=['ORD','LAX','ATL', 'JFK','DFW','LAS','SFO','DEN','EWR' ];
    var i=0;
    while(i<list.length){
	var j=0;
	while(j<list[i][airports[i]].length){
	    console.log(list[i][airports[i]][j]);
	    if(month==list[i][airports[i]][j][3]&&year==list[i][airports[i]][j][4]){
		total[i]+=list[i][airports[i]][j][2];
	    };
	    j+=1
	};
	i+=1;
    };
    console.log(total[0]);
    return total;
};

var getDelays=function(list, month, year){
    var delay=[0,0,0,0,0,0,0,0,0];
    var airports=['ORD','LAX','JFK', 'ATL','DFW','LAS','SFO','DEN','EWR' ];
    var i=0;
    while(i<totals.length){
	var j=0;
	while(j<list[i][airports[i]].length){
	    if(month==list[i][airports[i]][j][3]&&year==list[i][airports[i]][j][4]){
		delay[i]+=list[airports[i]][j][1];
	    };
	    j+=1
	};
	i+=1
    };
    return delay;
};

window.onload = function(){
	update();
	var svg = d3.select("svg");

}