/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/10
 *@Modified By:
 */
import React, {useState} from "react";
import {LoginDemo} from "./login";
import {Register} from "./register";

export const UnauthenticatedApp = () => {
    const [isRegister, setRegister] = useState(false);


    return (
        <div>
            {
                isRegister ? <Register/> : <LoginDemo/>
            }
            <button onClick={() => setRegister(!isRegister)}>{`切换到${isRegister?'登录':'注册'}`}</button>
        </div>
    )
}
