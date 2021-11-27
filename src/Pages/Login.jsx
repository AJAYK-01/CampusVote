import { useWeb3React } from "@web3-react/core";
import { useHistory } from "react-router";
import { useState, useEffect, useContext } from "react";
import { injected } from "../Components/Wallet/Connectors";
import { AuthContext } from "../Contexts/AuthContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import axios from "axios";
import VoteService from "../Helpers/voter";



function Login() {
  const history = useHistory();

  const voter = new VoteService();


  const [formData, setformData] = useState({
    username: '',
    email: 'a@a.com',
    password: ''
  })

  const { login, wallet } = useContext(AuthContext);
  const { loggedIn, setLoggedIn } = login;
  const { walletConnected, setWalletConnected } = wallet;
  const [error, setError] = useState(false);

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const connect = async () => {
    await activate(injected)
      .then(() => {
        setWalletConnected(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  async function loginToVote(e) {
    e.preventDefault();

    // await voter.signUpToBeVoter("name", "id", 1)

    axios({
      method: 'POST',
      data: formData,
      url: 'http://localhost:8000/auth/api/login',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (loggedIn && walletConnected) {
      history.push("/vote");
    }
  };

  const register = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      data: formData,
      url: 'http://localhost:8000/auth/api/register',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    setLoggedIn(true)
  }

  const onFormValueChange = (e) => {
    e.preventDefault();
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    connect();
    // loginToVote();
  }, []);

  return (
    <Container
      fluid
      style={{ height: "100vh" }}
      className="App d-flex align-items-center justify-content-center flex-column"
    >
      <Form className="w-25">
        <Form.Group>
          {error && (
            <Alert className="w-100 text-center" variant={"danger"}>
              Unable to connect, try again...
            </Alert>
          )}
          {walletConnected ? (
            <Alert className="w-100 text-center" variant={"success"}>
              Connected to wallet
            </Alert>
          ) : (
            <Alert className="w-100 text-center">Connecting to wallet...</Alert>
          )}
          {loggedIn ? (
            <Alert className="w-100 text-center" variant={"success"}>
              Logged In
            </Alert>
          ) : (
            <Alert className="w-100 text-center" variant={"success"}>
              Enter details
            </Alert>
          )}
          <Form.Control
            className="my-2"
            type="text"
            name="username"
            placeholder="Enter username"

            value="exampleuser"
            onChange={onFormValueChange}
          />
          <Form.Control
            className="my-2"
            type="password"
            name="password"
            placeholder="Enter password"

            value="password123"
            onChange={onFormValueChange}
          />
          <Button
            type="button"
            size="lg"
            className="w-100 my-2"
            onClick={register}
          >
            REGISTER
          </Button>
          <Button
            type="button"
            size="lg"
            className="w-100 my-2"
            onClick={loginToVote}
          >
            {loggedIn ? "VOTE" : "LOGIN"}
          </Button>
        </Form.Group>
      </Form>

      <h1 className="position-absolute bottom-0">Campus Vote</h1>
    </Container>
  );
}

export default Login;
