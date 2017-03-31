import airlines

##lists of dictionaries

list_of_airline = airlines.get_reports()

#for i in range(len(list_of_airline)):
#	print str(i )+ str(list_of_airline[i]) + "\n"
list_of_codes = ['ORD', 'LAX', 'ATL', 'JFK', 'DFW', 'LAS', 'SFO', 'DEN', 'EWR', 'FLL', 'LGA', 'MSP', 'PHX', 'IAH', 'MIA', 'SEA', 'CLT', 'PHL', 'BOS', 'PDX', 'SLC', 'MCO', 'DTW', 'TPA', 'IAD', 'MEM', 'BWI', 'MDW']
finalList = [{'ORD':[]}, {'LAX':[]}, {'ATL':[]}, {'JFK':[]}, {'DFW'[]}, {'LAS'[]}, {'SFO'[]}, {'DEN':[]}, {'EWR':[]}, {'FLL':[]}, {'LGA':[]}, {'MSP':[]}, {'PHX':[]}, {'IAH':[]}, {'MIA':[]}, {'SEA':[]}, {'CLT':[]}, {'PHL':[]}, {'BOS':[]}, {'PDX':[]}, {'SLC':[]}, {'MCO':[]}, {'DTW':[]}, {'TPA':[]}, {'IAD':[]}, {'MEM':[]}, {'BWI':[]}, {'MDW':[]}]



for thing in list_of_airline:
	if thing['airport']['code'] in list_of_codes:
		






#{
#	'airport': [code, name]
#	'stats': total
#}

def totalsList():
	totalsList = []
	for item in list_of_airline:
			dic = {}
			for key in item:#each item is a dict
				if key == "airport":
					dic['airport'] = [item[key]['code'], item[key]['name']]
				if key == "statistics":
					dic['stats'] = item[key]['flights']['total']
			totalsList.append(dic)

	for x in totalsList:
		if x['stats'] < 250:
			totalsList.remove(x)
	
	return totalsList




def delaysList():
	for i in range(20):
		delaysList = []
		for item in list_of_airline:
			dic = {}
			for key in item:#each item is a dict
				if key == "airport":
					dic['airport'] = [item[key]['code'], item[key]['name']]
				if key == "statistics":
				#print
					dic['stats'] = float(   int(item[key]['flights']['delayed']) / int(item[key]['flights']['total']))
			delaysList.append(dic)
	return delaysList



#print totalsList()
#print delaysList()
    
    #{
    #'airport': {'code': 'ATL', 'name': 'Atlanta, GA: Hartsfield-Jackson Atlanta International'}, 
    #'statistics': {'flights': {'cancelled': 5, 'on time': 561, 'total': 752, 'delayed': 186, 'diverted': 0}, 
    #'# of delays': {'late aircraft': 18, 'security': 2, 'weather': 28, 'national aviation system': 105, 'carrier': 34}, 'minutes delayed': 
    #{'late aircraft': 1269, 'weather': 1722, 'carrier': 1367, 
    #'security': 139, 'total': 8314, 'national aviation system': 3817}}, 'time': {'month': 6, 'label': '2003/6', 'year': 2003}, 
    #'carrier': {'code': 'AA', 'name': 'American Airlines Inc.'}
    #}, 

	#{'airport': {'code': 'BOS', 'name': 'Boston, MA: Logan International'}, 'statistics': {'flights': 
	#{'cancelled': 7, 'on time': 1034, 'total': 1266, 'delayed': 225, 'diverted': 0},
	# '# of delays': {'late aircraft': 46, 'security': 2, 'weather': 24, 'national aviation system': 84,
	#  'carrier': 69}, 'minutes delayed': {'late aircraft': 3043, 'weather': 1783, 'carrier': 4201, 'security': 45, 
	#  'total': 12139, 'national aviation system': 3067}}, 'time': {'month': 6, 'label': '2003/6', 'year': 2003}, 
	#  'carrier': {'code': 'AA', 'name': 'American Airlines Inc.'}}, 

#print list_of_airline