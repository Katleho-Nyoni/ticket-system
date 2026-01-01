import { useState } from "react";
import { createNewUser } from "../auth/authenticate";
import {  Link, useNavigate } from "react-router-dom";

export default function SignUpPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUpOnClick = async () => {
        try {
            await createNewUser(email, password);
            navigate("/Hello-World");
        } catch (e) {
           if(password !== confirmPassword) {
            setError("Password & Confirm Password do not match!");
            return;
        } else setError(e.message);
        } 
    }

    return(
        <>
            <div className="flex flex-col gap-8  p-18 border border-indigo-700 rounded-xl">
                <input type="email" name="email" id="email" placeholder="email address" 
                required value={email} onChange={(e) => setEmail(e.target.value)}
                className="h-10 border rounded"/>
                <input type="password" name="" id="" placeholder="Enter Password" 
                required value={password} onChange={(e) => setPassword(e.target.value)}
                className="h-10 border rounded"/>
                <input type="password" name="" id="" placeholder="Confirm Password" 
                required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-10 border rounded"/>
                {error && <p className="text-red-600">{error}</p>}
                <button type="submit" onClick={handleSignUpOnClick} disabled={ email && password && confirmPassword ? false : true }
                className="border bg-green-600 rounded-full text-white font-bold  cursor-pointer disabled:bg-gray-300 disabled:cursor-default">Create Account</button>
                <p>Already have an account? <Link to="/auth/sign-in" className="text-blue-700">Sign In</Link></p>
            </div>
        </>
    );
}