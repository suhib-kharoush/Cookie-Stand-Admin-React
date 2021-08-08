import CookieStandAdmin from "./CookieStandAdmin";
import LoginForm from "./LoginForm";
import axios from 'axios';
import { useState } from "react";


const baseUrl = 'https://cookie-stand-api.herokuapp.com';
const tokenUrl = baseUrl + '/api/token/';



export default function Home(props){

    const [token, setToken] = useState('');

    async function getToken(credentials){
        const fetchedToken = await axios.post(tokenUrl, credentials);
        setToken(fetchedToken.data.access);

      }
    
    function loginHandler(credentials){
        getToken(credentials);
    }

    if (!token) return <LoginForm loginHandler={loginHandler}/>
    return(

        <CookieStandAdmin token={token}/>
    );

  }
