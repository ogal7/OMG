from flask import Flask, render_template, request, session, redirect, url_for
app = Flask(__name__)
import json,sqlite3

db="data/mileHigh.db"
airData = sqlite3.connect(db)
c = airData.cursor()
query = "SELECT * FROM airlineData;"
data = c.execute(query)
airList = []

for entry in data:
	airList.append(entry)

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('site.html')

@app.route("/totals/", methods=["GET","POST"])
def totals():
	return render_template('totals.html', data = input)

@app.route("/delays/", methods=["POST"])
def delays():
	return render_template('delays.html')

@app.route("/test/", methods=["GET"])
def test():
        return render_template('test.html')

#ajax route
@app.route("/list/", methods=["GET"])
def list():
    return json.dumps(airList)

if(__name__ == "__main__"):
    app.debug = True
    app.run();
