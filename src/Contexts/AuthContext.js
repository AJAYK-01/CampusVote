import React, { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider({children}) {
    
    const [loggedIn, setLoggedIn] = useState(false)
    const [walletConnected, setWalletConnected] = useState(false)

    
    const value = {
        login: {loggedIn, setLoggedIn},
        wallet: {walletConnected, setWalletConnected}
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
