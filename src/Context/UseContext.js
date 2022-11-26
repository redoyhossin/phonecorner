import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const ContextAuth = createContext();
const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();



const UseContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loddar, setLodder] = useState(true);

    const signup = (email, password) => {
        setLodder(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const profileupdate = () => {
        return updateProfile();
    }

    const signin = (email, password) => {
        setLodder(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signingoogle = () => {
        setLodder(true);
        return signInWithPopup(auth,googleprovider);
    };

    const signingithub = () => {
        setLodder(true);
        return signInWithPopup(auth,githubprovider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, cureentUser => {
            setUser(cureentUser);
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