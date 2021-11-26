# BASIC SERVER: at localhost:5000

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return jsonify(message = 'you are connected to the server')


@app.route('/post/', methods=['POST'])
def post():
    data = request.get_json()
    print(data)
    return jsonify(message = 'your data was sent')
    


if __name__=='__main__':
    app.run()