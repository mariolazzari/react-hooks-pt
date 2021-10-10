import { useContext } from "react";
import UserContext from "./UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <input type="text" onChange={e => setUser(e.target.value)} />
    </div>
  );
};

export default Login;
