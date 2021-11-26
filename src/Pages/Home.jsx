import { useWeb3React } from "@web3-react/core"
import { web3 } from "web3";
import sendAccount from '../Components/api/sendAccount';
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { injected } from "../Components/Wallet/Connectors"


function Home() {

    const history = useHistory()
    const [connected, setConnected] = useState(false)
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function requestToken() {
        try {
            var myAccount = await window.ethereum.enable();
            if (Array.isArray(myAccount)) {
                myAccount = myAccount[0]
            }
            // console.log(myAccount);
            await sendAccount(myAccount);
        } catch (e) {
            console.log(e);
            console.log("error fetching account");
        }
    }

    async function connect() {
        try {
            await activate(injected);
            alert("Connnected to your Metamask")
            setConnected(true)
            // history.push('/vote')
        } catch (error) {
            console.error(error)
            alert("Failed connect")
        }
    }

    useEffect(() => {
        connect();
    }, [])

    if (!connected) {
        return (
            <div className="App">
                Connecting to Metamask
            </div>
        );
    }
    else {
        return (
            <div>
                <button style={{ height: 75, width: 150, fontSize: 22 }} onClick={requestToken}>
                    Request token from backend
                </button>
            </div>
        );
    }
    // const history = useHistory();

    // return (
    //     <div className="App">
    //         campus vote

    //         <button onClick={() => {history.push('/login')}}>LOGIN</button>
    //     </div>
    // );
}

export default Home;
