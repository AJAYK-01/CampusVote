import React from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

function Home() {
    const history = useHistory();

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
            <h4>Powered By:</h4>
            <p>Etherium, Polygon & Molaris</p>

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
