import { useWeb3React } from "@web3-react/core"
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { injected } from "../Components/Wallet/Connectors"

function Home() {

    const history = useHistory()
    const [connected, setConnected] = useState(false)
    const { active, account, library, connector, activate, deactivate } = useWeb3React()


    async function connect() {
        try {
            await activate(injected);
            alert("Connnected to your Metamask")
            setConnected(true)
            history.push('/vote')
        } catch (error) {
            console.error(error)
            alert("Failed connect")
        }
    }

    useEffect(() => {
        connect();
    },[])

    return (
        <div className="App">
            Connecting to Metamask
        </div>
    );
}

export default Home;
