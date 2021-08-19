/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/10
 *@Modified By:
 */
import React, {FormEvent} from 'react'
import {ScriptListScreen} from 'screens/project-list'
import {AuthObj} from "./context/auth-context";

export const AuthenticatedApp = () => {
    const {logout} = AuthObj();
    return <div>
        <button onClick={logout}>退出登录</button>
        <ScriptListScreen/>
    </div>
}
