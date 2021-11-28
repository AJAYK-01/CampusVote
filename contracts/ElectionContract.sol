pragma solidity ^0.4.17;

contract ElectionContract {
    address public owner;
    uint256 candidateCount;
    uint256 voterCount;
    bool start;
    bool end;

    // Constructor
    function ElectionContract() public {
        owner = msg.sender;
        candidateCount = 0;
        voterCount = 0;
        start = false;
        end = false;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    // Only Admin can access
    modifier onlyAdmin() {
        require(msg.sender == owner);
        _;
    }
    struct Candidate {
        string name;
        string party;
        uint256 voteCount;
        uint256 candidateId;
    }
    mapping(uint256 => Candidate) public candidateDetails;

    // Only admin can add candidate
    function addCandidate(
        string _name,
        string _party
    ) public onlyAdmin {
        Candidate memory newCandidate = Candidate({
            name: _name,
            party: _party,
            voteCount: 0,
            candidateId: candidateCount
        });
        candidateDetails[candidateCount] = newCandidate;
        candidateCount += 1;
    }

    // get total number of candidates
    function getCandidateNumber() public view returns (uint256) {
        return candidateCount;
    }

    struct Voter {
        address voterAddress;
        // string name;
        bool hasVoted;
        bool isVerified;
    }
    address[] public voters;
    mapping(address => Voter) public voterDetails;

    // request to be added as voter
    function addVoter(
        address _address
        // string _name,
    ) public {
        Voter memory newVoter = Voter({
            voterAddress: _address,
            // name: _name,
            hasVoted: false,
            isVerified: false
        });
        voterDetails[msg.sender] = newVoter;
        voters.push(msg.sender);
        voterCount += 1;
    }

    // get total number of voters
    function getVoterCount() public view returns (uint256) {
        return voterCount;
    }

    function verifyVoter(address _address) public onlyAdmin {
        addVoter(_address);
        voterDetails[_address].isVerified = true;
    }

    function vote(uint256 candidateId) public {
        require(voterDetails[msg.sender].hasVoted == false);
        require(voterDetails[msg.sender].isVerified == true);
        require(start == true);
        require(end == false);
        candidateDetails[candidateId].voteCount += 1;
        voterDetails[msg.sender].hasVoted = true;
    }

    function startElection() public onlyAdmin {
        start = true;
        end = false;
    }

    function endElection() public onlyAdmin {
        end = true;
        start = false;
    }

    function getStart() public view returns (bool) {
        return start;
    }

    function getEnd() public view returns (bool) {
        return end;
    }
}
