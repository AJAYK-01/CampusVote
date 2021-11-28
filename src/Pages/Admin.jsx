import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import AdminService from '../Helpers/admin'

function Admin() {

    const admin = new AdminService();

    const [walletAddress, setAddress] = useState('')
    const [newCandidate, setNewCandidate] = useState('')
    const [newCandidateParty, setNewCandidateParty] = useState('')

    const handleWalletAddress = (e) => {
        setAddress(e.target.value)
    }

    async function VoterVerification() {
        // address value in in "walletAddress" variable
        // placeholder for verifyVoter

        await admin.verifyVoter(walletAddress);
        alert("Voter verified");
    }

    const handleCandidate = (e) => {
        setNewCandidate(e.target.value)
    }

    const handleCandidateParty = (e) => {
        setNewCandidateParty(e.target.value)
    }

    async function addCandidate() {
        // address value in in "newCandidate" variable
        // placeholder for addCandidate

        await admin.addCandidate(newCandidate, newCandidateParty)
        alert("Added candidate");
    }

    async function VotingStart() {
        await admin.startElection();
        alert("Election Started")
    }

    async function VotingStop() {
        await admin.endElection();
        alert("Election Stopped");
    }

    return (
        <Container
            fluid
            style={{ height: "100vh" }}
            className="App d-flex align-items-center justify-content-center flex-column"
        >

            <h3>Admin</h3>

            <Form className='w-50 m-3'>
                <Form.Group>
                    <Form.Control type="text" className="m-2" onChange={handleWalletAddress} placeholder="enter wallet address" />
                    <Button className='w-100 m-2' onClick={VoterVerification}>Verify Voter</Button>
                </Form.Group>
            </Form>

            <Form className='w-50 m-3'>
                <Form.Group>
                    <Form.Control type="text" className="m-2" onChange={handleCandidate} placeholder="enter candidate Name" />
                    <Form.Control type="text" className="m-2" onChange={handleCandidateParty} placeholder="enter candidate Party" />
                    <Button className='w-100 m-2' onClick={addCandidate}>Add Candidate</Button>
                </Form.Group>
            </Form>

            <Button className='w-25 my-1' size="lg" variant="success" onClick={VotingStart}>Start Elections</Button>
            <Button className='w-25 my-1' size="lg" variant="danger" onClick={VotingStop}>Stop Elections</Button>

        </Container>
    );
}

export default Admin;
