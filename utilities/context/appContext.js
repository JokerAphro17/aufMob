// AppContext
import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
}

export { AppProvider, AppContext };
