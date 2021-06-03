/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/1
 *@Modified By:
 */
import React from 'react';

interface user {
    id: number,
    name: string
}

interface Props {
    users: user[],
    param: { name: string, personId: string },
    setParam: (param: Props['param']) => void
}

export const SearchPanel = ({users, param, setParam}: Props) => {
    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}
