var totals=[];
var delays=[];

var loadDoc = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	var list = JSON.parse(this.responseText);
	console.log(list[0]);
	totals=getTotal(list,'11','2012');
//	delays=getDelays(list,'11','2005');
	console.log(totals[0]);
    };
  };
  xhttp.open("GET", "http://127.0.0.1:5000/list/", true);
  xhttp.send();
};
/*
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

