import {Helmet} from 'react-helmet'
import { useLoaderData } from "react-router-dom";

export const fetchTickets = async () => {
    try {
      const response = await fetch('http://127.0.0.1:27000/api/ts/tickets');
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
    <div className="max-h-screen flex flex-col gap-20 items-center">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Total Tickets</div>
          <div className="stat-value">{result.length}</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Open Tickets</div>
          <div className="stat-value">{result.filter(t => t.status === "Open").length}</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Hardware Related</div>
          <div className="stat-value">{result.filter(t => t.issueType === "Hardware").length}</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Software Related</div>
          <div className="stat-value">{result.filter(t => t.issueType === "Software").length}</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Network Related</div>
          <div className="stat-value">{result.filter(t => t.issueType === "Network").length}</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Other Related</div>
          <div className="stat-value">{result.filter(t => t.issueType === "Other").length}</div>
        </div>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Issue</th>
              <th>Description</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Reply</th>
            </tr>
          </thead>
          <tbody>
            {result.map((ticket, _id) => (
              <tr key={_id}>
                <td>{ticket.employeeName}</td>
                <td>{ticket.employeeEmail}</td>
                <td>{ticket.issueType}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{ticket.updatedAt}</td>
                <td> <button 
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed px-4 py-2 cursor-pointer rounded font-bold" disabled={ticket.status === "Closed"}>{ticket.status==="Open" ? "Solve" : "Solved"} </button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> 
    </>
  );
}
