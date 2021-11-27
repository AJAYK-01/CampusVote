import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function VotePage() {


  const [tokenReceived, setTokenReceived] = useState(false);
  function receiveToken() {
    // function to receive tokens
    setTokenReceived(true)
}

  const [question, setQuestion] = useState("sample question");
  

  const [selectedOption, setSelectedOption] = useState(null);
  function sendVote(event) {
    event.preventDefault();
    // function to get the selection option
    console.log(selectedOption);

    // send the selectedOption to blockchain
  }

  const [options, setOptions] = useState([
    {
      value: "option 1",
    },
    {
      value: "option 2",
    },
    {
      value: "option 3",
    },
    {
      value: "option 4",
    },
  ]);

  const selectionOptions = [{ value: "select your option" }, ...options];

  


  

  return (
    <Container
      fluid
      style={{ height: "100vh" }}
      className="App d-flex align-items-center justify-content-center flex-column"
    >
      <h1 className="position-absolute bottom-0">Campus Vote</h1>
      <h1 className="m-5">{question}</h1>

      {tokenReceived && <Form className="w-25">
        <Form.Group>
          <FloatingLabel controlId="floatingSelect" label="time to vote">
            <Form.Select
              aria-label="voting options"
              onChange={(event) => setSelectedOption(event.target.value)}
            >
              {selectionOptions.map(({ value }, index) => (
                <option key={index}>{value}</option>
              ))}
            </Form.Select>
          </FloatingLabel>

          <Button type="button" onClick={sendVote} className="w-100 my-5">
            SEND YOUR VOTE
          </Button>
        </Form.Group>
      </Form>}

      {
          !tokenReceived &&
          <Button type="button" onClick={receiveToken} className="w-25 my-5">
          Receive token to vote
        </Button>
      }
    </Container>
  );
}

export default VotePage;
