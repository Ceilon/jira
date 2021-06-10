/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/9
 *@Modified By:
 */
import React, {ReactNode} from 'react'
import {AuthProvider} from "./auth-context";

export const AppProviders = ({children}: { children: ReactNode }) => {
    return <AuthProvider>
        {children}
    </AuthProvider>
}
