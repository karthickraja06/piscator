import { createContext, useState } from "react";

interface StoreContextType {
    name: string;
}

const StoreContext = createContext<StoreContextType>({ name: "User" });

const StoreContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState("Piscator");
    const contextValue = {
        name
    };
    setName;

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreContext, StoreContextProvider };