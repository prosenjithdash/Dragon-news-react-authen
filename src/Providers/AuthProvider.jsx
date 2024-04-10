// Context API

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

// Create Context API
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    // user info
    const [user, setUser] = useState(null)

    // pass email and password for create user account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signout
    const logOut = () => {
        return signOut(auth);
    }


    // onAuthStateChanged (user have or not)
    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, currentUser => {

            console.log(' User in the state auth changed', currentUser)
           setUser(currentUser)
           
            // if (currentUser) {
            //     // User is signed in, see docs for a list of available properties
            //     // https://firebase.google.com/docs/reference/js/auth.user
            //     const uid = currentUser.id;
            //     // ...
            // } else {
            //     // User is signed out
            //     // ...
           // }
           
       });
        return () => {
            unSubscribe();
        }
    }, [])
    
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;