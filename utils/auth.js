import  {useState, useEffect, useContext, createContext} from 'react';
import axios from "axios";
import Router from "next/router";
import { useRouter } from 'next/router'
import Error from '../pages/error'
import jsCookie from "js-cookie";

const authContext = createContext();


export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    console.log(auth)
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

export const ProtectRoute = ({ children }) => {
  const auth = useAuth();
  const router = useRouter()

  if ( jsCookie.get("auth") == null && ['/login', '/'].includes(router.pathname)!== true ){
    return <Error></Error>
  }
  return children;
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = async (email, password) => {
      const useruid = await axios
      .get(
        `/api/auth/signin`,
        { params: { email, password } },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => response);
      
       if (useruid.data.userInfo.uid.length > 0) {
        setUser(useruid.data.userInfo.uid)
              localStorage.setItem("displayName", useruid.data.userInfo.displayName);
              localStorage.setItem(
                "teams",
                JSON.stringify(useruid.data.userInfo.team)
              );
            }
    };

    return {
        userId: user,
        signin
    };
}
