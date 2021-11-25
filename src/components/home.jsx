import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react";
import { injected } from "../components/wallet/Connectors"

function Home() {

    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function connect() {
        try {
            await activate(injected);
            alert("Connnected to your Metamask")
            window.location.replace('/vote')
        } catch (ex) {
            console.log("Error")
            console.log(ex)
            alert("Failed connect")
        }
    }

    useEffect(() => {
        connect();
    })

    return (
        <div className="App">
            Connecting to Metamask
        </div>
    );
}

export default Home;
