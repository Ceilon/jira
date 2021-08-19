/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/1
 *@Modified By:
 */
import React, {useEffect, useState} from 'react';
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import qs from 'qs'
import {cleanObject, dataType, useDebounce} from "../../utils/utils";
import useMount from "../../customHooks/useMount";
import {useHttp} from "../../http";
import {handleUserResponse} from "../../auth-provider";

const apiUrl = process.env.REACT_APP_API_URL;

export const ScriptListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const useDebounceParam = useDebounce(param, 1000)
    const http = useHttp()
    useEffect(() => {
        http('projects', {data: cleanObject(useDebounceParam)}).then(data => setList(data))
    }, [useDebounceParam])

    useMount(() => {
        http('users').then(data =>setUsers(data))
    })

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}


