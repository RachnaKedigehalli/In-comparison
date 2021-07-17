from flask import render_template
from flask import request

from app import app

# from scrape import *
from app import scrape

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/user')
def user():
    username = request.args.get('username')
    data = scrape.user_info(username)
    print(data)
    print("---------------------")
    print(type(data))
    return data