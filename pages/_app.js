
import { UserContext } from '../providers/userProvider';
import Appbar from '../components/appbar';
import { useState, useEffect } from 'react'
import Router from 'next/router';
import useLocalStorage from '../utils/useLocalStorage';
import router from 'next/router';
import { useCookies } from 'react-cookie';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {

    function removeCookies() {
        var res = document.cookie;
        var multiple = res.split(";");
        for(var i = 0; i < multiple.length; i++) {
           var key = multiple[i].split("=");
           document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
        }
     }

    const handleLogout = () => {

        removeCookies(); 
        setLoggedUser("");
        setStatus([false]);
    
        router.push('/');
        router.reload();
    }
    
    const [loggedinuser, setLoggedUser] = useState(null);
   
    const [loggedin, setStatus] = useState(false);

    useEffect(() => {

        let user  = null

        if (document.cookie.length > 0)
        {
             user  =  document.cookie.split('; ')
            .find(row => row.startsWith('username'))
            .split('=')[1]

        }


        if (user != null){

            setLoggedUser(user);
            setStatus(true);
        }

    }, [loggedinuser,loggedin]);

    
    return (
        <>  
            <Appbar user={loggedinuser} loggedInState={loggedin} logout={handleLogout} >   </Appbar>
            <Component {...pageProps} ></Component>
           
        </>
    )
}




export default MyApp