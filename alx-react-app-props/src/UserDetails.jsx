// UserProfile.jsx
import React, { useContext } from "react";
import UserContext from "./components/UserContext"

function UserProfile() {
  const userData = useContext(UserContext); // consume context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
