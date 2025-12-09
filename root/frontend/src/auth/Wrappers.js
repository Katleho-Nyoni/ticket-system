import firebase from "firebase/app";

export const signIn = async (email, password) => {
try {
    const results = await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
} catch (error) {
    throw new Error(error.message);
}
}

export const signOut = async () => {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        throw new Error("Error signing out: " + error.message);
    }
}


