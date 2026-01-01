import { useEffect, useState } from "react";
import { auth, googleProvider } from "../main";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, 
    signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";

export const createNewUser = async (email, password) => {
      await  createUserWithEmailAndPassword(getAuth(), email, password)
}    

export const handleEmailSignIn = async (email, password) => {
        await signInWithEmailAndPassword(getAuth(), email, password);   
}    

export const handleSignInViaPopUp = async () => {
            await signInWithPopup(auth, googleProvider);
}

export const handleGoogleSignIn = async () => {
            await signInWithRedirect(auth, googleProvider);           
}

export const getCurrentUser = () => {
    const user = firebase.auth().currentUser;
    if (!user) return null;
    return {};
     
}

export const useUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            setUser(user);
            setIsLoading(false);
        })

        return unsubscribe;
    }, []);

    return { user, isLoading };
};


export const signOutUser = async () => {
    await signOut(getAuth());
}