/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/8
 *@Modified By:
 */
import React, {FormEvent} from 'react'
import {useAuth} from "../../context/auth-context";

interface Person {
    username: string,
    password: string
}


export const LoginDemo = () => {
    const {user, logout, login, register} = useAuth();

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (evt.currentTarget.elements[1] as HTMLFormElement).value;
        register({username, password})
    }

    return <div>
        <form onSubmit={handleSubmit}>
            {user ? <div>登录成功，用户名{user?.name}</div> : ''}
            <div><label htmlFor="username">帐号</label><input id={'username'} type="text"/></div>
            <div><label htmlFor="password">密码</label><input type="password" id={'password'}/></div>
            <button type={"submit"}>登录</button>
        </form>
    </div>
}
