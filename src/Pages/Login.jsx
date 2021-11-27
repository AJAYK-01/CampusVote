import { useWeb3React } from "@web3-react/core";
import { useHistory } from "react-router";
import { useState, useEffect, useContext } from "react";
import { injected } from "../Components/Wallet/Connectors";
import { AuthContext } from "../Contexts/AuthContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form'

function Login() {
  const history = useHistory();

  const { login, wallet } = useContext(AuthContext);
  const { loggedIn } = login;
  const { walletConnected, setWalletConnected } = wallet;
  const [error, setError] = useState(false)

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();


  const connect = async () => {
        
    await activate(injected)
        .then(() => {
            setWalletConnected(true)
        })
        .catch((err) => {
            console.log(err)
            setError(true)
        })

  }

  const redirectToVote = (e) => {
    e.preventDefault();
    if(loggedIn && walletConnected) {
        history.push('/vote')
    }
  }


  useEffect(() => {
    connect();
  },[]);

  return (
    <Container fluid style={{height: '100vh'}} className="App d-flex align-items-center justify-content-center flex-column">
      
      
    
      <Form className="w-25">
        <Form.Group>
        {
          error && <Alert className="w-100 text-center" variant={'danger'}>Unable to connect, try again...</Alert>
        }
        {
          walletConnected ? <Alert className="w-100 text-center" variant={'success'}>Connected to wallet</Alert> : <Alert className="w-100 text-center">Connecting to wallet...</Alert>
        }
        {
          loggedIn ? <Alert className="w-100 text-center" variant={'success'}>Logged In</Alert> : <Alert className="w-100 text-center" variant={'success'}>Enter details</Alert>
        }
        <Form.Control className="my-2" type="text" placeholder="Enter username" />
        <Form.Control className="my-2" type="password" placeholder="Enter password" />
        <Button type="submit" size="lg" className="w-100" onClick={redirectToVote}>
          {
            loggedIn ? 'VOTE' : 'LOGIN'
          }
        </Button>

        </Form.Group>
      </Form>
    
    <h1 className="position-absolute bottom-0">Campus Vote</h1>

    </Container>
  );
}

export default Login;
