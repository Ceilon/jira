/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/8
 *@Modified By:
 */
import React, {FormEvent} from 'react'
import {AuthObj} from "../context/auth-context";

export const LoginDemo = () => {
    const {user, logout, login, register} = AuthObj();

    const handleSubmit =  async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (evt.currentTarget.elements[1] as HTMLFormElement).value;
        await login({username, password})
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div><label htmlFor="username">帐号</label><input id={'username'} type="text"/></div>
            <div><label htmlFor="password">密码</label><input type="password" id={'password'}/></div>
            <button type={"submit"}>登录</button>
        </form>
    </div>
}
