import axios from 'axios';

const API = 'http://192.168.0.2:8080'

// get auth token
const token = '';

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

// sends account to backend so that admin can give a token for voting
const sendAccount = async (address) => {
    try {
        console.log(address)
        const res = await axios.post(API + '/requestTokens/',
            { account: address },
            {
                headers: {
                    'content-type': 'application/json',
                }
            },
        );

        // const res = await axios.get(API + '/');

        if (res.status === 200) {
            console.log(res.data);
        }
        else {
            console.log(res.status);
            alert('already voted');
        }
    }
    catch (e) {
        console.log(e);
        alert('error');
    }

}

export default sendAccount;
