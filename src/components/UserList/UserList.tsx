import { useState, useEffect } from "react";

import { httpClient } from "../../api/http-client";

import User from "../User/User";

import "./userlist.css";

const UserList = () => {
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const { data } = await httpClient.get("users");

        setUsers(data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch users");
      }
    }

    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "1em 20em" }}>
      <h1 className="userlist">User List</h1>
      {error && <h4 className="error">{error}</h4>}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
