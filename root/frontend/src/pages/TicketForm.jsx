

export default function TicketForm(){
    return(
        <>
            <div className="flex flex-col justify-center m-26 gap-4 boxshadow-lg p-8 rounded ">
                <h1 className="text-3xl font-bold">Log a Ticket</h1>
            <div>
                <input type="text" id="name" name="name" placeholder="Employee Name" required className="mt-6 border border-blue-600 py-2 px-18 rounded"/>
            </div>
            <summary className="list-none">
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
                    <option value="human-resource">Human Resource(HR)</option>
                    <option value="tech">Tech</option>
                </select>
            </summary>
            <div>
                <textarea id="description" name="description" rows={6} placeholder="Leave brief description here..." required className="border border-blue-600 py-2 px-18 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 w-auto self-center rounded cursor-pointer hover:bg-blue-600">Submit Ticket</button>
            </div>
        </>
    );
}