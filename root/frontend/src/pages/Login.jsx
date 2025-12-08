import { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function TicketForm(){
    // [employeeName, setName] = useState("");
    // [department, setDepartment] = useState("");
    // [issueType, setIssueType] = useState("");
    // [description, setDescription] = useState("");

    function LoginPage(){

    }

    return(
        <>
            <div className="flex flex-col justify-center items-center m-auto mt-30 gap-4 h-70 w-170">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <Form className="flex flex-col justify-center gap-4 rounded ">
                  <input type="email" name="email" id="email" placeholder="example.email.com" required className="py-2 rounded border border-amber-500"/>
                  <input type="password" name="password" id="password" placeholder="password" required className="py-2 rounded border border-amber-500"/>
                  <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-8  self-center rounded-3xl cursor-pointer hover:bg-blue-600">Log In</button>

                  <Link to="auth.google.com" className="py-2 px-6 bg-gray-400 rounded-xl">Continue with Google</Link>
                </Form>
            </div>
        </>
    );
}