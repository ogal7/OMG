var totals={
	'American Airlines Inc.':0, 
	'Delta Air Lines Inc.':0, 
	'Southwest Airlines Co.':0, 
	'United Air Lines Inc.':0,
	'Alaska Airlines Inc.':0, 
	'JetBlue Airways':0,
	'Spirit Air Lines':0
};
var delays={
	'American Airlines Inc.':0, 
	'Delta Air Lines Inc.':0, 
	'Southwest Airlines Co.':0, 
	'United Air Lines Inc.':0,
	'Alaska Airlines Inc.':0, 
	'JetBlue Airways':0,
	'Spirit Air Lines':0
};
var list;
var requestID,tmonth,tyear,dyear,dmonth,airport;
var totalscontainer = document.getElementById("totals");
var delayscontainer = document.getElementById("delays");
var tyearslider = document.getElementById("tyear")
var tmonthslider = document.getElementById("tmonth")
var dyearslider = document.getElementById("dyear")
var dmonthslider = document.getElementById("dmonth")
var tyearval = document.getElementById("tyearval");
var tmonthval = document.getElementById("tmonthval");
var dyearval = document.getElementById("tyearval");
var dmonthval = document.getElementById("tmonthval");
var coords ={
	"LAX":[100,250],
	"ATL":[490,250],
	"JFK":[600,130],
	"DFW":[325,330],
	"LAS":[150,220],
	"SFO":[50,160],
	"DEN":[200,220],
	"EWR":[600,130]
}
list_of_airlines = ['American Airlines Inc.', 'Delta Air Lines Inc.', 'Southwest Airlines Co.', 'United Air Lines Inc.','Alaska Airlines Inc.', 'JetBlue Airways','Spirit Air Lines']
var reqID=0;
var update = function(){
	tyear = tyearval.innerHTML = tyearslider.value;
	tmonth = tmonthval.innerHTML = tmonthslider.value;
	dyear = dyearval.innerHTML = dyearslider.value;
	dmonth = dmonthval.innerHTML = dmonthslider.value;
}

tyearslider.addEventListener("onmousedown",update);
tmonthslider.addEventListener("onmousedown",update);
dyearslider.addEventListener("onmousedown",update);
dmonthslider.addEventListener("onmousedown",update);

function passData(input){
        var jqXHR = $.ajax({
            type: "POST",
            url: "/totals/",
            async: false,
            data: { mydata: input }
        });

        return jqXHR.responseText;
    }

    $('#circle').click(function(){
        datatosend = [tmonth,tyear,airport];
        result = passData(datatosend);
        console.log('Got back ' + result);
    });

var createCircle = function (x,y,r,airport) {
	var c =	document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "blue");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", r);
    c.setAttribute("code",airport);
    c.addEventListener("click", function(){
    	window.location.href="/totals/"
    	/*
    	console.log("yes"); 
	    stage.toDataURL({
	                    callback: function (dataUrl) {

	                        //window.open(dataUrl);
	                        // Send the screenshot to PHP to save it on the server
	                        var url = 'export.php';
	                        //alert(url);
	                        $.ajax({
						    type: "POST",
						    url: url,
						    dataType: 'text',
						    data: {
						        base64data: dataUrl,
						        yname: thename,
						        yemail: theemail,
						        company: thecomp,
						        twitter: thetwitter
						    },
						    success: function() {
						        location.href = '/totals/';
						    }
						});

	                    }
	                });*/
	                });
    return c;
}

//var allCircs = d3.select("svg").selectAll("circle");
//allCircs.on("click",function(){ console.log("yes")});
//d3.selectAll("circle").on("click", function(){ window.location.href="/totals/"});
/*
for(var code in coords){
	var x = coords[code][0];
	var y = coords[code][1];
	var r = 15; //should be proportional to total flights
	var airport = code;
	newCirc = createCircle(x,y,r,airport);
	totalscontainer.appendChild(newCirc);
	delayscontainer.appendChild(newCirc);
}
 */
var clear = function(e) {
    var list =totalscontainer.childNodes;
    while (list.length != 0) {
	totalscontainer.removeChild(list[0]);
    }
}

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
/*
var clear = function(e){
    while(totalscontainer.lastChild){
	totalscontainer.removeChild(totalscontainer.lastChild);
    };
    while(delayscontainer.lastChild){
	delayscontainer.removeChild(delayscontainer.lastChild);
    };
};
*/
var anime = function() {
	
    window.cancelAnimationFrame( reqID );
	
    console.log(reqID);

    var drawDot = function() {
	console.log( reqID )
	
	clear();
	var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		var list = JSON.parse(this.responseText);
		totals=getTotal(list,tmonth,tyear);
		delays=getDelays(list,tmonth,tyear);
		console.log('hi');
		console.log(totals[0]);
		var i=0;
		var coordinates=[[390,190],[100,300],[500,300],[600,180],[325,380],[150,270],[50,210],[200,270],[600,180]];
		while (i<9){
		    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
		    c.setAttribute("cx",''+coordinates[i][0]);
		    c.setAttribute("cy",''+coordinates[i][1]);
		    c.setAttribute("r",''+totals[i]);
		    c.setAttribute("fill","yellow");
		    totalscontainer.appendChild(c);

		    var g = document.createElementNS("http://www.w3.org/2000/svg","circle");
		    g.setAttribute("cx",coordinates[i][0]);
		    g.setAttribute("cy",coordinates[i][1]);
		    g.setAttribute("r",delays[i]/50);
		    g.setAttribute("fill","yellow");
		    delayscontainer.appendChild(g);
		    i+=1;
		};
	    };
	};
	xhttp.open("GET", "http://127.0.0.1:5000/list/", true);
	xhttp.send();
	
	reqID = window.requestAnimationFrame( drawDot );
    };
    drawDot();
};
/*
var loadDoc = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	list = JSON.parse(this.responseText);
	console.log(list[0]);
    };
  };
  xhttp.open("GET", "http://127.0.0.1:5000/list/", true);
  xhttp.send();
};

var getTotal = function(list, month, year){
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

var getDelays = function(list, month, year){
    var i=0;
    while(i<list.length){
	    if(airport==list[i][0]&&month==list[i][4]&&year==list[i][5]){
		delay[list[i][6]]=list[i][2];
		};
		i+=1;
    };
    console.log(total[list[i][6]]);
    return total;
};
*/
window.onload = function(){
	update();
	var svg = d3.select("svg");
}


var getTotal = function(list, month, year){
    var total=[100,0,0,0,0,0,0,0,0];
    var airports=['ORD','LAX','ATL', 'JFK','DFW','LAS','SFO','DEN','EWR' ];
    var i=0;
    while(i<list.length){
	if(month==list[i][4]&&year==list[i][5]){
	    console.log(list[i][0]);
	if(list[i][0]=='ORD'){
	    total[0]+=list[i][3];
	};
	if(list[i][0]=='LAX'){
	    total[1]+=list[i][3];
	};
	if(list[i][0]=='ATL'){
	    total[2]+=list[i][3];
	};
	if(list[i][0]=='JFK'){
	    total[3]+=list[i][3];
	};
	if(list[i][0]=='DFW'){
	    total[4]+=list[i][3];
	};
	if(list[i][0]=='LAS'){
	    total[5]+=list[i][3];
	};
	if(list[i][0]=='SFO'){
	    total[6]+=list[i][3];
	};
	if(list[i][0]=='DEN'){
	    total[7]+=list[i][3];
	};
	if(list[i][0]=='OWR'){
	    total[8]+=list[i][3];
	};
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
	if(month==list[i][4]&&year==list[i][5]){
	if(list[i][0]=='ORD'){
	    total[0]+=list[i][3];
	};
	if(list[i][0]=='LAX'){
	    total[1]+=list[i][3];
	};
	if(list[i][0]=='ATL'){
	    total[2]+=list[i][3];
	};
	if(list[i][0]=='JFK'){
	    total[3]+=list[i][3];
	};
	if(list[i][0]=='DFW'){
	    total[4]+=list[i][3];
	};
	if(list[i][0]=='LAS'){
	    total[5]+=list[i][3];
	};
	if(list[i][0]=='SFO'){
	    total[6]+=list[i][3];
	};
	if(list[i][0]=='DEN'){
	    total[7]+=list[i][3];
	};
	if(list[i][0]=='OWR'){
	    total[8]+=list[i][3];
	};
	};
	i+=1;	
    };
    return delay;
};



