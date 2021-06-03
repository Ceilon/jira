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
import {cleanObject, useDebounce} from "../../utils/utils";
import useMount from "../../customHooks/useMount";

const apiUrl = process.env.REACT_APP_API_URL;

export const ScriptListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const useDebounceParam =useDebounce(param,1000)
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(useDebounceParam))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [useDebounceParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}


