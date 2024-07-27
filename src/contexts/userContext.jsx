import { createContext } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    return <UserContext.Provider value={{ userName: 'Josiel' }}>
        {children}
    </UserContext.Provider>
}

export { UserContextProvider };