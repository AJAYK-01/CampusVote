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
        const res = await axios.post(API + '/',
            { account: address }
        );

        // const res = await axios.get(API + '/');

        if (res.status === 200) {
            console.log(res.data);
            alert('click ok to view status of transaction')
            // alert('https://mumbai.polygonscan.com/tx/' + res.data.toString())
            window.open('https://mumbai.polygonscan.com/tx/' + res.data.toString(), '_blank').focus();
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
