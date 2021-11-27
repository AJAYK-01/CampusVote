import election_contract from '../contracts/ElectionContract.json';
import Web3 from 'web3';

class VoteService {

    async fetchAccount() {
        try {
            var myAccount = await window.ethereum.enable();
            if (Array.isArray(myAccount)) {
                myAccount = myAccount[0]
            }

            this.web3 = new Web3(window.ethereum);

            this.ElectionContract = new this.web3.eth.Contract(this.contractAbi, this.contractAddress);
            this.ElectionContract.options.address = this.contractAddress;
            this.ElectionContract.defaultAccount = myAccount;
            this.ElectionContract.options.from = myAccount;
            this.ElectionContract.defaultChain = 80001;

        } catch (e) {
            console.log("constructor " + e);
        }
    }

    constructor() {
        this.contractAbi = election_contract.abi;
        this.contractAddress = process.env.REACT_APP_Contract_ID;
    }

    async getCandidateCount() {
        await this.fetchAccount();
        const count = await this.ElectionContract.methods.getCandidateNumber().call();
        console.log(count);
    }

    async castVote(id) {
        await this.fetchAccount();
        await this.ElectionContract.methods.vote(id).send();
    }

    async signUpToBeVoter(name, id, constituency) {
        await this.fetchAccount();
        await this.ElectionContract.methods.requestVoter(name, id, constituency).send();
    }

    async fetchCandidates() {
        await this.fetchAccount();
        const candidateList = [];
        const total = await this.ElectionContract.methods.getCandidateNumber().call();
        for (var i = 0; i < total; i++) {
            const candidate = await this.ElectionContract.methods.candidateDetails(i).call();
            candidateList.push(candidate);
            console.log(candidate);
        }

        return candidateList;
    }
}

export default VoteService;