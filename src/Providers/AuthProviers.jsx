
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged  , signInWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.config';



const auth = getAuth(app)

const Authproviders =({children}) => {
    const [loading , setloading] = useState(true)
    const [user ,setuser] = useState(null)
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth , currentUser => {
            console.log('user in auth state changes' , currentUser)
            setuser(currentUser)
        })

        return () => {
            Unsubscribe()
        }
    },[])

    
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const loginUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    // Login USer with Google
    const googleprovider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        GoogleLogin
    }

    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

Authproviders.propTypes = {
    children : PropTypes.node
};

export default Authproviders;