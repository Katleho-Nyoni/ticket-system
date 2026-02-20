// import { useState } from "react";
import axios from "axios";
import { Form } from "react-router-dom";
import { useUser } from "../auth/authenticate";

export default function TicketForm(){
    const { isLoading, user } = useUser();
    // [employeeName, setName] = useState("");
    // [department, setDepartment] = useState("");
    // [issueType, setIssueType] = useState("");
    // [description, setDescription] = useState("");

    // function SubmitForm(){

    // }

    return(
        <>
            <div className="flex flex-col justify-center items-center m-auto mt-30 gap-4 h-70 w-170">
                <h1 className="text-3xl font-bold">TICKET LOGGER</h1>
                <Form className="flex flex-col justify-center gap-4 rounded ">
                    <input type="text" name="employeeName" value={user.displayName} hidden />
                    <input type="email" name="employeeEmail" value={user.email} hidden />
            
                    <summary className="list-none ">
                    <select name="issueType" /*value={issueType}*/>
                        <option value="">default</option>
                        <option value="hardware">Hardware</option>
                        <option value="software">Software</option>
                    </select>
                    </summary>
                    <textarea name="description" rows={6} placeholder="Leave brief description here..." required className="border border-blue-600 py-2 px-18 rounded"></textarea>
                    <input type="text" name="status" value="Open" hidden />
                    <button type="submit" 
                     className="bg-blue-500 text-white font-bold py-2 px-4 w-auto m-6 self-center rounded cursor-pointer hover:bg-blue-600">Submit Ticket</button>
                </Form>
            </div>
        </>
    );
}