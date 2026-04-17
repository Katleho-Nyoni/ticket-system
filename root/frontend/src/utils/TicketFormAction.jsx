import { redirect } from "react-router-dom";

export const ticketFormAction = async ({request}) => {
    const formEntry = await request.formData();
    const ticketEntry = Object.fromEntries(formEntry);

    console.log(ticketEntry);

    // const token = await user.getIdToken();
    // const headers = token ? { authtoken: token } : {};

    await fetch("http://localhost:27000/api/ts/tickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketEntry)
    });

    return redirect("/ticket-system/admin/login");
}

export default function TicketFormAction(){
    ticketFormAction()
}

 