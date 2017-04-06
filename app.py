from flask import Flask, render_template, request, session, redirect, url_for
app = Flask(__name__)
import json,sqlite3

db="data/mileHigh.db"
airData = sqlite3.connect(db)
c = airData.cursor()
query = "SELECT * FROM airlineData;"
data = c.execute(query)
airList = []
total={'LAX':0,'ATL':0, 'JFK':0,'DFW':0,'LAS':0,'SFO':0,'DEN':0,'EWR':0}
airports=['LAX','ATL', 'JFK','DFW','LAS','SFO','DEN','EWR']


for entry in data:
	airList.append(entry)

def getTotal(month, year):
	for item in airList:
		if(month==item[4] and year==item[5]):
			if(item[0]=='LAX'):
			    total['LAX']=item[3]
			if(item[0]=='ATL'):
			    total['ATL']=item[3]
			if(item[0]=='JFK'):
			    total['JFK']=item[3]
			if(item[0]=='DFW'):
			    total['DFW']=item[3]
			if(item[0]=='LAS'):
			    total['LAS']=item[3]
			if(item[0]=='SFO'):
			    total['SFO']=item[3]
			if(item[0]=='DEN'):
			    total['DEN']=item[3]
			if(item[0]=='OWR'):
			    total['EWR']=item[3]
	print total, month, year
	return total

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
@app.route("/getTotals/",methods=["GET","POST"])
def ajaxTotals():
	#res = request.json
	return json.dumps(getTotal(int(request.form["month"]),int(request.form["year"])))

@app.route("/list/", methods=["GET"])
def list():
    return json.dumps(airList)

if(__name__ == "__main__"):
    app.debug = True
    app.run()