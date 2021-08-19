/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/9
 *@Modified By:
 */
import React, {createContext, ReactNode, useContext, useState} from "react";
import * as auth from 'auth-provider'
import {User} from "auth-provider";
import {http} from "../http";
import useMount from "../customHooks/useMount";

interface AuthForm {
    username: string,
    password: string
}

interface AuthContextType {
    user: User | null,
    login: (form: AuthForm) => Promise<void>,
    register: (form: AuthForm) => Promise<void>,
    logout: () => Promise<void>
}

const bootstrapUser = async () => {
    let user = null;
    const token = auth.getToken();
    if (token) {
        const data = await http('me', {token})
        user = data.user
    }
    return user
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
AuthContext.displayName = 'AuthContext'
export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const login = (form: AuthForm) => auth.login(form).then(setUser);
    const register = (form: AuthForm) => auth.register(form).then(setUser);
    const logout = () => auth.logout().then(() => setUser(null))

    useMount(() => {
        bootstrapUser().then(setUser)
    })

    return <AuthContext.Provider children={children} value={{user, login, register, logout}}/>
}

export const AuthObj = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("AuthObj必须在AuthProvider中使用");
    }
    return context
}
