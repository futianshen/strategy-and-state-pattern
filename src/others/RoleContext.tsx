import React, { createContext, useContext, useState } from "react";

export type RoleType = "member" | "admin";

export const RoleContext = createContext<{
  role?: RoleType;
  setRole?: React.Dispatch<React.SetStateAction<RoleType>>;
}>({});
export const useRole = () => useContext(RoleContext);

const RoleProvider: React.FC = ({ children }) => {
  const [role, setRole] = useState<RoleType>("member");
  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
