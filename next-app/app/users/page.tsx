// Routing system, convention, not configuration
// rafce <= shortcut for code snippet autocomplete
// access in browser then /users
import React from "react";

// the magic of typescript file
// defining the shape of object interface for every user's prop being fetched
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // fetch dummy json data
  // fetching data is preffered in server side

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: 'no-store' => for data that changes frequently, thus making the route dynamic
    // next: {revalidate: 10} => get fresh data every 10s (only used in fetch func.)
    cache: "no-store",
  });

  // annotate const with interface
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users Table</h1>
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.id}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </tfoot>
      </table>
      {/* try to use dynamic rendering */}
      <p>Accessed at: {new Date().toLocaleTimeString()}</p>
    </>
  );
};

export default UsersPage;
