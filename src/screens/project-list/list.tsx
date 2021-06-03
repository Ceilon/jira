/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/1
 *@Modified By:
 */
import React from 'react';

interface Project {
    id: number,
    name: string,
    personId: number,
    organization: string,
    created: number
}

interface user {
    id: number,
    name: string
}

interface Props {
    list: Project[],
    users: user[]
}

export const List = ({list, users}: Props) => {
    return <table>
        <thead>
        <tr>
            <th>名称</th>
            <th>负责人</th>
        </tr>
        </thead>
        <tbody>
        {
            list.map(project => <tr key={project.id}>
                <td>{project.name}</td>
                <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
            </tr>)
        }
        </tbody>
    </table>
}
