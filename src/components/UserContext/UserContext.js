import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "Mamun", position: "Front End Dev", salary: 28000 },
    { id: 2, name: "Md AL Mamun Mim", position: "Data Scientist", salary: 26000 },
    { id: 3, name: "Shakib Al Hasan", position: "Cricketer", salary: 700000 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
