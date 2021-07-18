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
    user_num = int(request.args.get('number'))

    data = {'valid': False, 'info': []}
    for i in range(user_num):
        username = request.args.get('user'+str(i+1))
        if username:
            userInfo = scrape.user_info(username)
            data['info'].append(userInfo)
            if isinstance(userInfo, dict):
                data['valid'] = True
        else:
            data['info'].append("Enter usernames to compare!")
    return data