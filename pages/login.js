import SignIn from '../components/signin'
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../providers/userProvider'
import router from 'next/router';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    box: {
  
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: '5%',
      marginLeft: '20%',
      marginRight: '20%',
      textAlign: "center"
    },
    card: {
  
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: '5%',
      marginLeft: '20%',
      marginRight: '20%',
      textAlign: "center"
    }
  }));

export default function Signin() {

    const classes = useStyles();

    const { user, setUser } = useContext(UserContext);

    const signInWithEmailAndPassword = async (email, password) => {

        try {
            const useruid = await axios.get(`/api/auth/signin`, { params: { email, password } }, 
                                                                { headers: { 'Content-Type': 'application/json' } })
                .then(response => response)
             
            console.log(useruid.data.userInfo.uid.length)
            if (useruid.data.userInfo.uid.length > 0) {
              
                router.push({pathname:'/console' , query: { data: useruid.data.userInfo.displayName} })
                router.reload();
            }
        }
        catch (error) {
        }
    };

    return (
        <div>
            <Box Container className={classes.box}>
            <Card>
            <SignIn Signin={signInWithEmailAndPassword} ></SignIn>
            </Card>
          </Box>
        </div>
    )
}