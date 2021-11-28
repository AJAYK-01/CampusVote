import election_contract from '../contracts/ElectionContract.json';
import Web3 from 'web3';

class AdminService {

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

    async startElection() {
        await this.fetchAccount();
        await this.ElectionContract.methods.startElection().send();
    }

    async endElection() {
        await this.fetchAccount();
        await this.ElectionContract.methods.endElection().send();
    }

    async isStarted() {
        await this.fetchAccount();
        const res = await this.ElectionContract.methods.getStart().call();
        return res
    }

    async isEnded() {
        await this.fetchAccount();
        const res = await this.ElectionContract.methods.getEnd().call();
        return res;
    }


    async getVoterCount() {

        await this.fetchAccount();
        const owner = await this.ElectionContract.methods.getVoterCount().call();
        alert(owner);
    }

    // wallet address
    async verifyVoter(accountAddress) {
        // accountAddress = "0xD802Aa1408bbCC59DB8204A41637918dED209af7"
        await this.fetchAccount();
        await this.ElectionContract.methods.verifyVoter(accountAddress).send();
    }

    async getCandidateCount() {
        await this.fetchAccount();
        await this.ElectionContract.methods.getCandidateNumber().call();
    }

    async addCandidate(name, party) {
        await this.fetchAccount();
        const result = await this.ElectionContract.methods.addCandidate(name, party).send();
        console.log(result);
    }

}

export default AdminService;