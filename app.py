from flask import Flask, render_template, request, session, redirect, url_for
import airlines
app = Flask(__name__)



##lists of dictionaries
list_of_airline = airlines.get_reports()

#650 wide, 420 high
#list_of_codes = ['ORD', 'LAX', 'ATL', 'JFK', 'DFW', 'LAS', 'SFO', 'DEN', 'EWR', 'FLL', 'LGA', 'MSP', 'PHX', 'IAH', 'MIA', 'SEA', 'PHL', 'BOS', 'PDX', 'SLC', 'DTW', 'TPA', 'IAD', 'BWI']
list_of_codes = ['ORD', 'LAX', 'ATL', 'JFK', 'DFW', 'LAS', 'SFO', 'DEN', 'EWR']
list_of_airlines = ['American Airlines Inc.', 'Delta Air Lines Inc.', 'Southwest Airlines Co.', 'United Air Lines Inc.','Alaska Airlines Inc.', 'JetBlue Airways','Spirit Air Lines']
finalList = []
for item in list_of_codes:
	li = []
	finalList.append({item: li})

#{'
# { airport': {'code': 'DFW', 'name': 'Dallas/Fort Worth, TX: Dallas/Fort Worth International'}, 
#'statistics': {'flights': 
					#{'#cancelled': 444, 'on time': 7986, 'total': 12360, 'delayed': 3919, 'diverted': 11}, 
				 #'# of delays':
					#{'late aircraft': 1742, 'security': 5, 'weather': 47, 'national aviation system': 1059, 'carrier': 1065}, 
					#'minutes delayed': 
							#{'late aircraft': 117134, 'weather': 2716, 'carrier': 85312, 'security': 275, 'total': 240085, 'national aviation system': 34648}
				#},
# 'time': {'month': 9, 'label': '2012/9', 'year': 2012},
# 'carrier': {'code': 'AA', 'name': 'American Airlines Inc.'}
#}

for thing in list_of_airline:
	if thing['airport']['code'] in list_of_codes:
		code = thing['airport']['code']
		coordinates = getCoord(code)
		i = list_of_codes.index(thing['airport']['code'])
		apName = thing['airport']['name']
		delayed = thing['statistics']['flights']['delayed'] 
		total =  thing['statistics']['flights']['total']
		month = thing['time']['month']
		year = thing['time']['year']
		numYear = int(year)
		carrier =thing['carrier']['name']
		if (carrier in list_of_airlines) and (numYear >= 2011 and numYear <= 2016):
			finalList[i][code].append([apName,delayed,total,month,year,carrier, coordinates])




def getCoord(code):
	x = 0
	y = 0
	if code == 'ORD':
		x = 390
		y = 190
	if code == 'LAX':
		x = 100
		y = 300
	if code == 'ATL':
		x= 500
		y = 300
	if code == 'JFK':
		x = 600
		y = 180
	if code == 'DFW':
		x = 325
		y = 380
	if code == 'LAS':
		x = 150
		y = 270
	if code == 'SFO':
		x = 50
		y = 210
	if code == 'DEN':
		x = 200
		y= 270
	if code == 'EWR':
		x = 600
		y = 180
	return [x,y]



@app.route("/")
def main():
    return render_template('site.html')

@app.route("/totals/", methods="POST")
def totals():
	return render_template('totals.html')

@app.route("/delays/", methods="POST")
def delays():
	return render_template('delays.html')

if(__name__ == "__main__"):
    app.debug = True
    app.run();
