import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const ContextAuth = createContext();
const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();



const UseContext = ({ children }) => {
    const [user,setUser] = useState({});
    const [loddar, setLodder] = useState(true);

    const signup = (email, password) => {
        setLodder(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const profileupdate = (infouser) => {
        return updateProfile(auth.currentUser, infouser);
    };

    const signin = (email, password) => {
        setLodder(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signingoogle = () => {
        setLodder(true);
        return signInWithPopup(auth, googleprovider);
    };

    const signingithub = () => {
        setLodder(true);
        return signInWithPopup(auth, githubprovider);
    };

    const logout = () => {
        setLodder(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLodder(false);

        })
        return () => {
            unsubscribe();
        }

    }, [])


    const authvalue = {
        signup,
        profileupdate,
        signin,
        user,
        loddar,
        signingoogle,
        signingithub,
        logout,
    }
    return (
        <div>
            <ContextAuth.Provider value={authvalue}>
                {children}
            </ContextAuth.Provider>
        </div>
    );
};

export default UseContext;