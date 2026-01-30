/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('TicketSystemDB');

// Insert a few documents into the sales collection.
db.getCollection('tickets').insertMany([
  { 'employeeName': 'Email Example', 'employeeEmail': 'email@example.com', 'issueType': 'Software', 'description': 'Unable to access email account', 'status': 'Open' },
  { 'employeeName': 'John Doe', 'employeeEmail': 'john.doe@example.com', 'issueType': 'Hardware', 'description': 'Keyboard not responding', 'status': 'Closed' },
  { 'employeeName': 'Jane Smith', 'employeeEmail': 'jane.smith@example.com', 'issueType': 'Network', 'description': 'Slow internet connection', 'status': 'Open' },
  { 'employeeName': 'Fake Name', 'employeeEmail': 'fake@example.com', 'issueType': 'Other', 'description': 'Unspecified issue', 'status': 'Closed' },
  { 'employeeName': 'Alan Turing', 'employeeEmail': 'alan.turing@example.com', 'issueType': 'Hardware', 'description': 'The Turing Machine doesn`t turn on', 'status': 'Closed' },
]);

console.log(db.getCollection('tickets').find({}))