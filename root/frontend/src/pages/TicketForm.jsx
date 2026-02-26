// import { useState } from "react";
import axios from "axios";
import { Form, redirect } from "react-router-dom";
import { useUser } from "../auth/authenticate";

export default function TicketForm(){
    const { isLoading, user } = useUser();
    // [employeeName, setName] = useState("");
    // [department, setDepartment] = useState("");
    // [issueType, setIssueType] = useState("");
    // [description, setDescription] = useState("");

    // function SubmitForm(){

    // }
    if(user===null){
        return <p>Loading...</p>
    }

    if(isLoading){
        return <p>Loading...</p>
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center m-auto mt-30 gap-4 h-70 w-170">
                <h1 className="text-3xl font-bold">TICKET LOGGER</h1>
                <Form method="post" action="/ticket-system/log/ticket"
                className="flex flex-col justify-center gap-4 rounded ">
                    <input type="text" name="employeeName" defaultValue={user.displayName} hidden />
                    <input type="email" name="employeeEmail" defaultValue={user.email} hidden />
            
                    <select name="issueType" /*value={issueType}*/>
                        <option value="">Issue Type</option>
                        <option value="hardware">Hardware</option>
                        <option value="software">Software</option>
                        <option value="network">Network</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea name="description" rows={6} placeholder="Leave brief description here..." required className="border border-blue-600 py-2 px-18 rounded"></textarea>
                    <input type="text" name="status" value="Open" hidden />
                    <button type="submit" 
                     className="bg-blue-500 text-white font-bold py-2 px-4 w-auto m-6 self-center rounded cursor-pointer hover:bg-blue-600">Submit Ticket</button>
                </Form>
            </div>
        </>
    );
}

export const ticketFormAction = async ({request}) => {
    const formEntry = await request.formData();
    const ticketEntry = Object.fromEntries(formEntry);

    console.log(ticketEntry);

    return redirect("/ticket-system/admin/login");
}