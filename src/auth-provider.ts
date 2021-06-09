/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/9
 *@Modified By:
 */
interface User {
    id: string,
    name: string,
    email: string,
    title: string,
    organization: string,
    token: string
}

const localStorageKey = '__auth_provider_token'
const apiUrl = process.env.REACT_APP_API_URL;
export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}
export const login = (data: { username: string, password: string }) => {
    fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async response => {
        if (response.ok) {
            return handleUserResponse(await response.json())
        } else {
            console.log('登录失败')
        }
    })
}
