// authContext
import React, { createContext, useState } from "react";
import HANDLER_STORAGE from "../../data";
import { USER_SESSION } from "../constant/app.constant";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const  signin =  async (newUser, callback) => {
        setUser(newUser);
        callback();
    };

    const signout = (callback) => {
        setUser(null);
        callback();
    };

    const value = { user, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };
