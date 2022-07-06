# CampusVote

Blockchain based Voting Platform for Transparent Campus Elections.

## Objective

To make a transparent online voting platform for Colleges using blockchain technology.
Polygon Mumbai testnet used for demo. 
Moralis Speedy Nodes for the Node.

## Demo

[![Loading](https://img.youtube.com/vi/Ch__ECkJGxQ/0.jpg)](https://www.youtube.com/watch?v=Ch__ECkJGxQ)

## Features 

- Faster result declaration.
- Less effort of manual counting.
- Seamless, yet transparent voting even during lockdowns.
- Less need for disputes as votes and data are public and immutable thanks to blockchain.

## Working

### User (Voter)
- User logs in with Metamask.
- User requests for token to Flask backend to have balance to make the voting transaction.
- Once tokens recieved, User presented with voting options, and casts the vote.
- Vote casting done with the help of Smart contract deployed to Mumbai Testnet. [View the contract](https://mumbai.polygonscan.com/address/0xF6Bf58551F7724dE086CAd26C2eee59A0472A179)
- Double voting is prevented by Smart Contract.
- Results can be seen in the home page by clicking Get Results which invokes a view function in the Smart Contract

### Admin Panel
- Start/Stop elections buttons which invoke fucntions to prevent or allow election in the Smart Contract.
- Add candidate option
- Verify voter takes in the account address of User and marks it as verified, only after which can the user make a vote. This is to be automated with log in and voters list. (This prevents false voting)


## Deploy Contracts

```
  yarn install
  truffle develop
  compile --all
  migrate --network mumbai --reset
```

## Run the Frontend

```
  yarn install
  yarn start
```

To build:

```
  yarn build
 ```

## Run the Flask Backend 
(for serving user requests for tokens to make voting transactions)
```
  cd SERVER
  pip install -r requirements.txt
  python server.py
```


## Made with ❤️ by:

- [AJAYK-01](https://github.com/AJAYK-01)
- [shreydan](https://github.com/shreydan)
- [Dakshesh14](https://github.com/Dakshesh14)
