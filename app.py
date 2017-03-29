from flask import Flask, render_template, request, session, redirect, url_for
import airlines
app = Flask(__name__)


@app.route("/")
def main():
    return render_template('site.html')


    #{'airport': {'code': 'ATL', 'name': 'Atlanta, GA: Hartsfield-Jackson Atlanta International'}, 
    #'statistics': {'flights': {'cancelled': 5, 'on time': 561, 'total': 752, 'delayed': 186, 'diverted': 0}, 
    #'# of delays': {'late aircraft': 18, 'security': 2, 'weather': 28, 'national aviation system': 105, 'carrier': 34}, 'minutes delayed': 
    #{'late aircraft': 1269, 'weather': 1722, 'carrier': 1367, 
    #'security': 139, 'total': 8314, 'national aviation system': 3817}}, 'time': {'month': 6, 'label': '2003/6', 'year': 2003}, 
    #'carrier': {'code': 'AA', 'name': 'American Airlines Inc.'}}, 

	#{'airport': {'code': 'BOS', 'name': 'Boston, MA: Logan International'}, 'statistics': {'flights': 
	#{'cancelled': 7, 'on time': 1034, 'total': 1266, 'delayed': 225, 'diverted': 0},
	# '# of delays': {'late aircraft': 46, 'security': 2, 'weather': 24, 'national aviation system': 84,
	#  'carrier': 69}, 'minutes delayed': {'late aircraft': 3043, 'weather': 1783, 'carrier': 4201, 'security': 45, 
	#  'total': 12139, 'national aviation system': 3067}}, 'time': {'month': 6, 'label': '2003/6', 'year': 2003}, 
	#  'carrier': {'code': 'AA', 'name': 'American Airlines Inc.'}}, 

totalsList = []
delaysList = []

list_of_airline = airlines.get_reports()
#print list_of_airline

if(__name__ == "__main__"):
    app.debug = True
    app.run();
