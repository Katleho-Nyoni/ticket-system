import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { handleEmailSignIn, handleSignInViaPopUp } from "../auth/authenticate";

export default function SignInPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

   const handleEmailChange = (e) => {
        setEmail(e.target.value);
   }
   
   const handlePasswordChange = (e) => {
        setPassword(e.target.value);
   }

   const handleEmailSignInOnClick = async () => {
        try {
            await handleEmailSignIn(email, password);
            navigate("/Hello-World");
        } catch (e) {
            setError(e.message);
        }
   }

   const handleGoogleSignInOnClick = async () => {
        await handleSignInViaPopUp();
        navigate("/Hello-World");
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center gap-8 h-screen w-screen p-18 shadow-md shadow-gray-500 rounded-xl">
                <input type="email" name="email" id="email" placeholder="Email Address"
                 required value={email} onChange={handleEmailChange}
                 className="h-12 w-120 border rounded-full" />
                <input type="password" name="password" id="password" placeholder="Password"
                 required value={password} onChange={handlePasswordChange}
                 className="h-12 w-120 border rounded-full"/>
                 {error && <p className="text-red-600">{error}</p>}
                <button type="submit" 
                 disabled={email && password ? false : true} onClick={handleEmailSignInOnClick}
                 className="h-12 w-120 boder bg-blue-700 rounded-full text-white font-extrabold cursor-pointer disabled:bg-gray-300 disabled:cursor-default"                
                >Log In</button>
                {/* <p>Don't have an account? <Link to="/auth/sign-up"  */}
                 {/* className="text-blue-700">Create Account</Link></p> */}
                <GoogleButton onClick={handleGoogleSignInOnClick} /> 
            </div >
            
            
        </>
    );
}