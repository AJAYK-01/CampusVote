import { useWeb3React } from "@web3-react/core"
import { Redirect } from "react-router";
import { useEffect, useState } from "react";
import { injected } from "../Components/Wallet/Connectors"

function Home() {

    const [connected, setConnected] = useState(false)
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    if(connected) {
        return <Redirect to='/vote' />
    }

    async function connect() {
        try {
            await activate(injected);
            alert("Connnected to your Metamask")
            setConnected(true)
        } catch (error) {
            console.error(error)
            alert("Failed connect")
        }
    }

    useEffect(() => {
        connect();
    },[connected])

    return (
        <div className="App">
            Connecting to Metamask
        </div>
    );
}

export default Home;
