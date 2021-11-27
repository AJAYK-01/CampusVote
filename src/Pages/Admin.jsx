import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import AdminService from '../Helpers/admin'

function Admin() {

    const admin = new AdminService();

    const [walletAddress, setAddress] = useState('')
    const [newCandidate, setNewCandidate] = useState('')

    const handleWalletAddress = (e) => {
        setAddress(e.target.value)
    }

    function VoterVerification() {
        // address value in in "walletAddress" variable
        // placeholder for verifyVoter
    }

    const handleCandidate = (e) => {
        setNewCandidate(e.target.value)
    }

    function addCandidate() {
        // address value in in "newCandidate" variable
        // placeholder for addCandidate
    }

    function VotingStart() {

    }

    function VotingStop() {

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
            <Form.Control type="text" className="m-2" onChange={handleWalletAddress}  placeholder="enter wallet address"/>
            <Button className='w-100 m-2' onClick={VoterVerification}>Verify Voter</Button>
        </Form.Group>
    </Form>

    <Form className='w-50 m-3'>
        <Form.Group>
            <Form.Control type="text" className="m-2" onChange={handleCandidate}  placeholder="enter candidate address"/>
            <Button className='w-100 m-2' onClick={addCandidate}>Add Candidate</Button>
        </Form.Group>
    </Form>

    <Button className='w-25 my-1' size="lg" variant="success" onClick={VotingStart}>Start Voting</Button>
    <Button className='w-25 my-1' size="lg" variant="danger" onClick={VotingStop}>Stop Voting</Button>

    </Container>
  );
}

export default Admin;
