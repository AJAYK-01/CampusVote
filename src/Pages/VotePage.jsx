import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import VoteService from "../Helpers/voter";
require('dotenv').config()

function VotePage() {

    const voter = new VoteService();

    const [tokenReceived, setTokenReceived] = useState(false);


    async function receiveToken() {

        await voter.sendAccount();
        alert("You will shortly receive the token required to vote in your wallet")

        const candidates = await voter.fetchCandidates();
        var optionstring = []
        candidates.forEach(candidate => {
            let sl = candidate.id + 1
            optionstring.push(sl + ". " + candidate.name + " - " + candidate.party);
        });

        // getCount();
        // console.log(optionstring);
        setOptions(optionstring);
        setTokenReceived(true);
        // console.log(candidates);
    }

    const [question, setQuestion] = useState("sample question");

    const [selectedOption, setSelectedOption] = useState(null);
    async function sendVote(event) {
        event.preventDefault();

        if (selectedOption) {
            let id = selectedOption - 1;
            await voter.castVote(id);
            alert("Vote has been cast!! click Ok to view the transactions")
            window.location.replace("https://mumbai.polygonscan.com/address/" + process.env.REACT_APP_Contract_ID);
        }
        else {
            alert("Please select an option to Vote");
        }
    }

    const [options, setOptions] = useState([]);

    const selectionOptions = ["Select your option", ...options];

    useEffect(() => {
    }, []);

    return (
        <Container
            fluid
            style={{ height: "100vh" }}
            className="App d-flex align-items-center justify-content-center flex-column"
        >
            <h1 className="position-absolute bottom-0">Campus Vote</h1>
            <h1 className="m-5">{question}</h1>

            {tokenReceived && (
                <Form className="w-25">
                    <Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="time to vote">
                            <Form.Select
                                aria-label="voting options"
                                onChange={(event) => setSelectedOption(event.target.selectedIndex)}
                            >
                                {selectionOptions.map((value, index) => (
                                    <option key={index}>{value}</option>
                                ))}
                            </Form.Select>
                        </FloatingLabel>

                        <Button type="button" onClick={sendVote} className="w-100 my-5">
                            SEND YOUR VOTE
                        </Button>
                    </Form.Group>
                </Form>
            )}

            {!tokenReceived && (
                <Button type="button" onClick={receiveToken} className="w-25 my-5">
                    Receive token to vote
                </Button>
            )}
        </Container>
    );
}

export default VotePage;
