import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext?.setUser({
      email: "jb@gmail.com",
      name: "Jainish Bharti",
    });
  };
  const handleLogout = () => {
    userContext?.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name} </div>
      <div>User name is {userContext.user?.email} </div>
    </div>
  );
};
