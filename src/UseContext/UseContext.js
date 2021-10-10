import { UserProvider } from "./UserContext";
import User from "./User";
import Login from "./Login";

const UseContext = () => {
  return (
    <UserProvider>
      <User />
      <Login />
    </UserProvider>
  );
};

export default UseContext;
