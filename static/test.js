var totals=[];
var delays=[];

var loadDoc = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	var list = JSON.parse(this.responseText);
	console.log(list[8]);
	totals=getTotal(list);
	delays=getDelays(list);
	console.log(totals[0]);
    };
  };
  xhttp.open("GET", "http://127.0.0.1:5000/list/", true);
  xhttp.send();
};

var getTotal = function(list, month, year){
    var totals=[0,0,0,0,0,0,0,0,0];
    var airports=['ORD','LAX','ATL', 'JFK','DFW','LAS','SFO','DEN','EWR' ];
    var i=0;
    while(i<totals.len){
	var j=0;
	while(j<list[i][airports[i]].len){
	    if(month==list[i][airports[i]][3]&&year==list[i][airports[i]][4]){
		totals[i]+=list[i][airports[i]][2];
	    };
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
		totals[i]+=list[airports[i]][1];
	    };
	};
    };
    return delays;
};

loadDoc();
console.log(totals[0]);
