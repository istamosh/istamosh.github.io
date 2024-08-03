// Routing system, convention, not configuration
// rafce <= shortcut for code snippet autocomplete
// access in browser then /users
import React from "react";

// the magic of typescript file
// defining the shape of object interface for every user's prop being fetched
interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // fetch dummy json data
  // fetching data is preffered in server side

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: 'no-store' => for data that changes frequently
    // next: {revalidate: 10} => get fresh data every 10s (only used in fetch func.)
    next: { revalidate: 10 },
  });

  // annotate const with interface
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users:</h1>
      <ul>
        {users.map((user, i) => (
          <li key={user.id}>
            {i + 1}. {user.name}
          </li>
        ))}
      </ul>
      {/* try to use dynamic rendering */}
      <p>Accessed at: {new Date().toLocaleTimeString()}</p>
    </>
  );
};

export default UsersPage;
