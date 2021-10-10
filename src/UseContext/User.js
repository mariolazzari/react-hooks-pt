import { useContext } from "react";
import UserContext from "./UserContext";

const User = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>User: {user}</h2>
    </div>
  );
};

export default User;
