from flask import Flask, render_template, request, session, redirect, url_for
import airlines
app = Flask(__name__)



##lists of dictionaries
list_of_airline = airlines.get_reports()


list_of_codes = ['ORD', 'LAX', 'ATL', 'JFK', 'DFW', 'LAS', 'SFO', 'DEN', 'EWR', 'FLL', 'LGA', 'MSP', 'PHX', 'IAH', 'MIA', 'SEA', 'CLT', 'PHL', 'BOS', 'PDX', 'SLC', 'MCO', 'DTW', 'TPA', 'IAD', 'MEM', 'BWI', 'MDW']
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
		i = list_of_codes.index(thing['airport']['code'])
		apName = thing['airport']['name']
		delayed = thing['statistics']['flights']['delayed'] 
		total =  thing['statistics']['flights']['total']
		month = thing['time']['month']
		year = thing['time']['year']
		numYear = int(year)
		carrier =thing['carrier']['name']
		if (carrier in list_of_airlines) and (numYear >= 2011 and numYear <= 2016):
			finalList[i][code].append([apName,delayed,total,month,year,carrier])



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
