import { useWeb3React } from "@web3-react/core";
import { useHistory } from "react-router";
import { useEffect, useContext } from "react";
import { injected } from "../Components/Wallet/Connectors";
import { AuthContext } from "../Contexts/AuthContext";

function Login() {
  const history = useHistory();

  const { login, wallet } = useContext(AuthContext);
  const { loggedIn } = login;
  const { walletConnected, setWalletConnected } = wallet;

  console.log(loggedIn, walletConnected);

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();


  const connect = async () => {
        
    await activate(injected)
        .then(() => {
            setWalletConnected(true)
            alert("wallet connected")
        })
        .catch((err) => {
            console.log(err)
            alert("Check console for error")
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
    <div className="App">
      {loggedIn && walletConnected ? (
        <p>Redirecting...</p>
      ) : (
        <p>Connecting...</p>
      )}

      <button onClick={redirectToVote}>VOTE</button>
    </div>
  );
}

export default Login;
