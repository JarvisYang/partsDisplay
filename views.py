from __future__ import with_statement
from contextlib import closing
import sqlite3
from flask import Flask,request,session,g,redirect,url_for,abort,render_template


app = Flask(__name__)
app.config.from_object(__name__)
@app.route('/')
def home():
	return render_template('home.html')

@app.route('/index')
def index():
	return render_template('index.html')

@app.route('/produceList')
def produceList():
	return render_template('produceList.html')

@app.route('/aboutUs')
def aboutUs():
	return render_template('aboutUs.html')

@app.route('/contectUs')
def contectUs():
	return render_template('contectUs.html')

@app.route('/pro1')
def pro1():
	return render_template('pro1.html')

@app.route('/pro2')
def pro2():
	return render_template('pro2.html')

@app.route('/pro3')
def pro3():
	return render_template('pro3.html')

@app.route('/pro4')
def pro4():
	return render_template('pro4.html')

@app.route('/pro5')
def pro5():
	return render_template('pro5.html')

@app.route('/pro6')
def pro6():
	return render_template('pro6.html')

if __name__ ==  '__main__': 
	app.debug=True
	app.run()