import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
function UsersApi() {
  const apiUrl = "https://dummyjson.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadApi();
  }, []);
  // method to load API

  async function loadApi() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setUsers(jsonData.users);
    } catch (error) {
      alert(error + "occured");
    }
  }
  const usersList = users.map((user) => {
    return (
      <ProfileCard
        image={user.image}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
      />
    );
  });
  return <div className="container">{usersList}</div>;
}
export default UsersApi;
