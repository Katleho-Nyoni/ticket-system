import { useState } from "react";
import { Form } from "react-router-dom";

export default function TicketForm(){
    // [employeeName, setName] = useState("");
    // [department, setDepartment] = useState("");
    // [issueType, setIssueType] = useState("");
    // [description, setDescription] = useState("");

    function SubmitForm(){

    }

    return(
        <>
            <div className="flex flex-col justify-center items-center m-auto mt-30 gap-4 h-70 w-170">
                <h1 className="text-3xl font-bold">Log a Ticket</h1>
                <Form className="flex flex-col justify-center gap-4 rounded ">
                    <input type="text" id="name" name="name" placeholder="Employee Name" required className="mt-6 border border-blue-600 py-2 px-18 rounded"/>
            
                    <summary className="list-none ">
                    <select name="software-hardware" id="software-hardware">
                        <option value="">default</option>
                        <option value="hardware">Hardware</option>
                        <option value="software">Software</option>
                    </select>
                    </summary>
            
                    <summary className="list-none">
                    <select name="department" id="department">
                        <option value="">Department</option>
                        <option value="marketing">Marketing</option>
                        <option value="human-resource">Human Resource</option>
                        <option value="tech">Tech</option>
                    </select>
                    </summary>
                
                    <textarea id="description" name="description" rows={6} placeholder="Leave brief description here..." required className="border border-blue-600 py-2 px-18 rounded"></textarea>
                
                    <button type="submit" onSubmit={SubmitForm} className="bg-blue-500 text-white font-bold py-2 px-4 w-auto self-center rounded cursor-pointer hover:bg-blue-600">Submit Ticket</button>
                </Form>
            </div>
        </>
    );
}