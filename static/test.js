var dataSet=[];

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	return JSON.parse(this.responseText);
    };
  };
  xhttp.open("GET", "http://127.0.0.1:5000/list/", true);
  xhttp.send();
};


dataSet=JSON.parse(loadDoc());
console.log(loadDoc());
