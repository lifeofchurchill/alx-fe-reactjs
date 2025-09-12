// UserDetails.jsx
import { useContext } from "react";
import UserContext from "./UserContext"; // default import

function UserDetails() {
  const userData = useContext(UserContext); // grab data directly

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
