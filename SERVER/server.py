from flask import Flask, jsonify, request
from transfer_token import transfer_token
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route("/", methods=['GET', 'POST'])
def helloWorld():
    if request.method == 'GET':
        key_dict = request.args.get('account')
        account = key_dict
        try:
            print(account)
            res = transfer_token(account)
            return jsonify(res)
        except Exception as e:
            print(e)
            return "error"
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
      # return "Hello, cross-origin-world!"
      # return jsonify({"status": "perfect"})


@app.route('/requestTokens', methods=['GET'])
def request_tokens():
    if request.method == 'GET':
        key_dict = request.args.get('account')
        account = key_dict
        try:
            print(account)
            res = transfer_token(account)
            return jsonify(res)
        except Exception as e:
            print(e)
            return "error"

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
    elif request.method == 'OPTIONS':
        return "Ok"


app.run(host='0.0.0.0', port=8080, debug=True)
