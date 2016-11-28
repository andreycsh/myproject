# encoding=utf8 
import requests
import re
import json
import select
import time
import psycopg2
import psycopg2.extensions
import threading
from multiprocessing import Pool
import sys  




global data

f = open('data.json', 'r')

data = f.readlines()

conn = psycopg2.connect("dbname=seccase user=andrey password = aaa111")
cur = conn.cursor()
f.close()

def request_init(i):
	jdata = json.loads(data[i])
	city = 'Алматы '
	district = ''
	street = ''
	house = ''
	q = city
	if jdata["district"]:
		if jdata["district"][:14] == "РАЙОН В ГОРОДЕ":
			district = jdata["district"][15:] + " район "
		elif jdata["district"][:10] == "МИКРОРАЙОН":
			district = jdata["district"][11:] + " микрорайон "
		else:
			return
		q = q + district
		
	if jdata["street"]:
		street = 'улица ' + jdata["street"][6:] + ' '
		q = q + street

	if jdata["house"]:
		if len(jdata["house"])>7:
			return
		if jdata["house"][:3] == "дом":
			if jdata["house"][4:].isnumeric():
				house = jdata["house"][4:]
			else:
				simbol = re.search(r'\D', jdata["house"][4:])
				num = jdata["house"].find(simbol.group(0), 4, len(jdata["house"]))
				house = jdata["house"][4:num]
		q = q + house

	params = dict(
			q = q,
			key = 'ruczoy1743',
			version = '1.3',
		)
	url='http://catalog.api.2gis.ru/geo/search'
	html=requests.get(url, params=params).json()
	if not html['result'][0]['selection'].startswith('POIN'):
		return
	print(i)
	coords = html['result'][0]['selection'][6:].strip(')').split(" ", 1)
	lon = coords[0]
	lat = coords[1]
 
	cur.execute("""INSERT INTO seccase_place (city, district, street, house, lat, lon)
        	    VALUES (%(c)s, %(d)s, %(s)s, %(h)s, %(lat)s, %(lon)s);""",
       		    {'c': city , 'd': district, 's': street, 'h': house,  'lon': lon, 'lat': lat})
	conn.commit()
	print("city " + city + " d " + district + " s " + street + " h " + house )
	
	return coords

timeStart = time.time()

num = []

for i in range(1, len(data)-1):
	num.append(i)

pool = Pool(32)

try:
	coords = pool.map(request_init, num)
except requests.exceptions.ConnectionError:
	print ('2gis прервал соединение')
finally:
	pool.close()
	pool.join()
	
	print('Overall processing is done in', time.time() - timeStart, 'sec')




'''
def request_init(page_value):
	params = dict(
		where = 'Алматы',
		what = 'банкоматы+каспи',
		key = 'ruczoy1743',
		version = '1.3',
		page = page_value
	)
	url='http://catalog.api.2gis.ru/geo/search'
	html=requests.get(url, params=params).json()
	return html

pages = []
for i in range(1, 4):
	pages.append(i)

pool = ThreadPool(2)

html = pool.map(request_init, pages)

pool.close()
pool.join()

connect = psycopg2.connect("dbname=test user=student")
cur = connect.cursor()

for i in html:
	for j in i['result']:
		cur.execute(
        """INSERT INTO coolsite_Bankomats (address, longitude, latitude, point)
        VALUES (%(a)s, %(lon)s, %(lat)s, ST_SetSRID(ST_MakePoint(%(lon)s, %(lat)s), 4326));""",
       {'a': j['address'], 'lon': j['lon'], 'lat': j['lat']})

connect.commit()
connect.close()
'''