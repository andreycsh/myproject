# -*- coding: utf-8 -*-
import requests
import json
import traceback
import time
import sys
import psycopg2
import threading
from urllib import parse
from multiprocessing import Pool

client_id = '5JG1KT24F5YXU02ABPJKECREXBZ44ZBQOKDHPMN5OBPMJIRS' 
client_secret = 'RRJJ4LTOA1MFEY05VG3LHXFMMGIWPP2IG43BY2ENEJPDQATP' 
def getVenues(cat): 		#CATegory for loop
	global client_id, client_secret
	venues = []
	url = 'https://api.foursquare.com/v2/venues/explore'
	params = parse.urlencode({'client_id': client_id,
							  'client_secret': client_secret,
							  'v': '20160901',
							  'near': 'Алматы, Казахстан',
							  'query': cat,

							  'limit': 5000})

	


	r = requests.get(url + '?' + params) 




	if r:
		data = json.loads(r.text)
		if 'response' in data:
			if 'groups' in data['response']:
				groups = data['response']['groups']
				for group in groups:
					if 'items' in group:
						items = group['items']
						for item in items:
							if 'venue' in item:
								itemID = item['venue']['id']
								name = item['venue']['name']
								address = None
								if 'address' in item['venue']['location']:
									address = item['venue']['location']['address']
								lon = item['venue']['location']['lng']
								lat = item['venue']['location']['lat']
								phone = None
								if 'phone' in item['venue']['contact']:
									phone = item['venue']['contact']['phone']
								rating = None
								if 'rating' in item['venue']:
									rating = item['venue']['rating']
								venues.append({'id': itemID,
											   'name': name,
											   'address': address,
											   'lon': lon,
											   'lat': lat,
											   'phone': phone,
											   'rating': rating,
											   'type': cat})
					break
			else:
				print(r.text)
				sys.exit()
		else:
			print(r.text)
			sys.exit()
	else:
		print(r)
		sys.exit()
	return venues

def getReviews1(venues):
	global client_id, client_secret
	for venue in venues:
		reviews = []
		url = 'https://api.foursquare.com/v2/venues/%s/tips' % venue['id']
		params = parse.urlencode({'client_id': client_id,
								  'client_secret': client_secret,
								  'v': '20160901',
								  'limit': 50000})
		r = requests.get(url + '?' + params)
		if r:
			data = json.loads(r.text)
			if 'response' in data:
				if 'tips' in data['response']:
					if 'items' in data['response']['tips']:
						tips = data['response']['tips']['items']
						for tip in tips:
							text = tip['text']
							reviews.append(text)
		venue['reviews'] = reviews
		writeToDB(venue)

def getReviews2(venue):
	global client_id, client_secret
	reviews = []
	url = 'https://api.foursquare.com/v2/venues/%s/tips' % venue['id']
	params = {'client_id': client_id,
			  'client_secret': client_secret,
			  'v': '20160901',
			  'limit': 500}
	r = requests.get(url, params = params)
	if r:
		data = r.json()
		if 'response' in data:
			if 'tips' in data['response']:
				if 'items' in data['response']['tips']:
					tips = data['response']['tips']['items']
					for tip in tips:
						text = tip['text']
						reviews.append(text)
	venue['reviews'] = reviews
	writeToDB(venue)

def writeToDB(venue):
	con = psycopg2.connect(host = 'localhost', database = 'test', user = 'andrey', password = 'aaa111', port = '')
	try:
		cur1 = con.cursor()

		# cur1.execute("CREATE TABLE venues (name varchar, address varchar,phone varchar, longitude real, latitude real, rating varchar);")
		cur1.execute('INSERT INTO venues (name, address, phone, longitude, latitude, rating, type, rec_id) ' + \
					 'VALUES (%s, %s, %s, %s, %s, %s, %s, %s) RETURNING rec_id',
					 (venue['name'], venue['address'], venue['phone'], venue['lon'], venue['lat'], venue['rating'], venue['type'], venue['id']))
		rec_id = cur1.fetchone()[0]
		con.commit()
		if len(venue['reviews']) > 0:
			cur2 = con.cursor()
			for review in venue['reviews']:
				cur2.execute('INSERT INTO venue_tips (venue_id, "text") ' + \
							 'VALUES (%s, %s)',
							 (rec_id, review))
				con.commit()
	except:
		print(traceback.format_exc())
		con.rollback()
	finally:
		con.close()

def main():
	timeStart = time.time()
	for i in ['cafe', 'pizza', 'restaurant', 'sushi', 'burger']:
		venues = getVenues(i)
		print('Venues are loaded in', time.time() - timeStart, 'sec')
		curTime = time.time()
		if len(venues) > 0:
		# This is a single thread option
		# getReviews1(venues)

		# This is a multithreaded option
		# threads = []
		# threadCount = 100
		# for i in range(threadCount):
		# 	partVenues = venues[int(i*len(venues)/threadCount) : int((i + 1)*len(venues)/threadCount)]
		# 	t = threading.Thread(target = getReviews1, args = (partVenues,))
		# 	threads.append(t)
		# 	t.start()
		# for t in threads:
		# 	t.join()

		# This is a multiprocessed option
			processCount = 100
			pool = Pool(processes = processCount)
			venues = pool.map(getReviews2, venues)
			pool.close()
			pool.join()

		print('Reviews are loaded in', time.time() - curTime, 'sec')
		print('Overall processing is done in', time.time() - timeStart, 'sec')

if __name__ == '__main__':
	main()
