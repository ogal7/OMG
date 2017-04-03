function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	console.log(this.responseText);
    };
  };
  xhttp.open("GET", "http://127.0.0.1:5000/list/", true);
  xhttp.send();
};
