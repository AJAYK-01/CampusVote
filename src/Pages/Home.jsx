import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function Home() {

    const history = useHistory();

    return (
        <div className="App">
            campus vote

            <button onClick={() => {history.push('/login')}}>LOGIN</button>
        </div>
    );
}

export default Home;
