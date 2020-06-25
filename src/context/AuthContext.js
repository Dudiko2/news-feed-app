import { createContext } from "react";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
