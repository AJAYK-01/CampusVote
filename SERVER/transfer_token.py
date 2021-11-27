from web3 import Web3
from decouple import config

Project_ID = config('Project_ID')
Private_Key = config('Private_Key')

w3 = Web3(Web3.HTTPProvider(
    config('SpeedyURL'),))
# w3.eth.defaultCommon = {'customChain': {'name': 'Mumbai Testnet',
#                                         'chainId': 80001}}

account = w3.eth.account.privateKeyToAccount(Private_Key)
w3.eth.default_account = account.address


def transfer_token(address):
    address = w3.toChecksumAddress(address)
    balance = w3.eth.get_balance(address)
    print(balance)

    transaction = {
        'to': address,
        'value': 100000000000000000,
        'gas': 20000000,
        'gasPrice': 10000000000,
        'nonce': w3.eth.getTransactionCount(account.address),
        'chainId': 80001,
    }

    key = Private_Key
    signed = w3.eth.account.sign_transaction(transaction, key)

    try:
        res = w3.eth.send_raw_transaction(signed.rawTransaction)
        print("success")
        print(res.hex())
        return(res.hex())

    except Exception as e:
        print(e)


# transfer_token('0xD802Aa1408bbCC59DB8204A41637918dED209af7')
