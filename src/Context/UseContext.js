import React from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';


export const ContextAuth = createContext();
const auth = getAuth(app);



const UseContext = ({ children }) => {

    const signup = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signin = (email, password) => {
       
        return signInWithEmailAndPassword(auth, email, password);
    };


    const authvalue = {
        signup,
        signin,
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