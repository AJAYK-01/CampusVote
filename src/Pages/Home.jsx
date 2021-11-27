import React from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import VoteService from "../Helpers/voter";


function Home() {
    const history = useHistory();

    const voter = new VoteService();


    async function fetchResults() {
        const candidates = await voter.fetchCandidates();
        var optionstring = ''
        candidates.forEach(candidate => {
            let sl = candidate.id + 1
            optionstring = optionstring + sl + ". " + candidate.name + " - " + candidate.party + ": " + candidate.voteCount + " Votes\n"
        });
        alert(optionstring);
    }
    return (
        <Container
            className="App d-flex justify-content-center align-items-center flex-column"
            fluid
            style={{ height: "100vh" }}
        >
            <h1>Campus Vote</h1>
            <p>Decentralized and Secure Voting</p>
            <Button
                size="lg"
                className="w-25 m-5"
                onClick={() => {
                    history.push("/login");
                }}
            >
                LOGIN
            </Button>
            <Button
                size="lg"
                className="w-25 m-5"
                onClick={() => {
                    history.push("/admin");
                }}
            >
                Admin Panel
            </Button>
            <Button
                size="lg"
                className="w-25 m-5"
                onClick={() => {
                    fetchResults()
                }}
            >
                Get Results
            </Button>
            <h4>Powered By:</h4>
            <p> Polygon, Molaris & Replit</p>

            <Alert
                className="w-50 m-5 text-center position-absolute bottom-0"
                variant={"dark"}
            >
                Built for HackForTomorrow
            </Alert>
        </Container>
    );
}

export default Home;
