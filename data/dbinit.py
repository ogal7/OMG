import airlines
import json
import sqlite3   #enable control of an sqlite database
import csv       #facilitates CSV I/O


f="mileHigh.db"
#created = True# gives an error if you try to make the same table twice
db = sqlite3.connect(f) #open if f exists, otherwise create
c = db.cursor()    #facilitate db ops



##lists of dictionaries
list_of_airline = airlines.get_reports()

#650 wide, 420 high
#list_of_codes = ['ORD', 'LAX', 'ATL', 'JFK', 'DFW', 'LAS', 'SFO', 'DEN', 'EWR', 'FLL', 'LGA', 'MSP', 'PHX', 'IAH', 'MIA', 'SEA', 'PHL', 'BOS', 'PDX', 'SLC', 'DTW', 'TPA', 'IAD', 'BWI']
list_of_codes = ['LAX', 'ATL', 'JFK', 'DFW', 'LAS', 'SFO', 'DEN', 'EWR']
list_of_airlines = ['American Airlines Inc.', 'Delta Air Lines Inc.', 'Southwest Airlines Co.', 'United Air Lines Inc.','Alaska Airlines Inc.', 'JetBlue Airways','Spirit Air Lines']
finalList = []
for item in list_of_codes:
	li = []
	finalList.append({item: li})

def getCoord(code):
    x = 0
    y = 0
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

q = "CREATE TABLE airlineData (code TEXT, airportName TEXT, delays INTEGER, total INTEGER, month INTEGER, year INTEGER, airline TEXT, xcor INTEGER, ycor INTEGER)"
c.execute(q)

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
			finalList[i][code].append([code, apName,delayed,total,month,year,carrier, coordinates])
			#command = "INSERT INTO airlineData VALUES('%s','%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')"%(code, apName, delayed, total, month, year, carrier, coordinates[0], coordinates[1])
			#c.execute(command)


for dic in finalList:
	for key in dic:
		for item in dic[key]:
			print item[0]
			print item[1]
			print item[2]
			print item[3]
			print item[4]
			print item[5]
			print item[6]
			print item[7][0]
			print item[7][1]
			c.execute("INSERT INTO airlineData VALUES('%s','%s', '%d', '%d', '%d', '%d', '%s', '%d', '%d')"%(item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7][0], item[7][1]))

#code, airportname, delays, total, month, year, airline, xcor, ycor

#==========================================================
#INSERT YOUR POPULATE CODE IN THIS ZONE
#...perhaps by beginning with these examples...
##q = "CREATE TABLE students (name TEXT, id INTEGER)"
#c.execute(q)    #run SQL query

#insert = "INSERT INTO users2 VALUES ('%s', '%s', '%s', '%s')"%(fn, ln, usern, hashOG(unhashedp))
#['Chicago, IL: Chicago Midway International', 1360, 5844, 1, 2011, 'Southwest Airlines Co.']

db.commit() #save changes
db.close()  #close database
#return json.dumps(finalList)
