import { useLoaderData } from "react-router-dom";

export const fetchTickets = async () => {
    try {
      const response = await fetch('http://127.0.0.1:27027/api/ts/tickets');
      const results = await response.json();
      return results;
    } catch (err) {
      console.error(err);
      return [];
    }
    
}


export default function AdminDashboardPage() {
  const result = useLoaderData();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Admin Dashboard Page</h1>
      <div>
        {result.map((ticket,_id) =>(
          <div key={_id}>
            <h2>{ticket.employeeName}</h2>
            <p>{ticket.employeeEmail}</p>
          </div>
        ))}
      </div>
    </>
  );
}
