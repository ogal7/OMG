
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	var myList=JSON.parse(this.responseText);
	console.log(myList[0]);
    };
  };
  xhttp.open("GET", "http://127.0.0.1:5000/list/", true);
  return xhttp.send();
};


var dataSet = loadDoc();
console.log(dataSet)
