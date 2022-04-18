import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const values = { fullName, setFullName };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
