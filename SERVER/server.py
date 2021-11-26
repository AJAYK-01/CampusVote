# BASIC SERVER: at localhost:5000

from flask import Flask, jsonify, request
from flask_cors import CORS
from transfer_token import transfer_token


app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    return jsonify(message='you are connected to the server')


@app.route('/post/', methods=['POST'])
def post():
    data = request.get_json()
    print(data)
    return jsonify(message='your data was sent')


@app.route('/requestTokens', methods=['POST'])
def request_tokens():
    if request.method == 'POST':
        key_dict = request.get_json()
        account = key_dict["account"]
        try:
            print(account)
            res = transfer_token(account)
            return jsonify(res)
        except Exception as e:
            print(e)
            return "error"


if __name__ == '__main__':
    app.run()
