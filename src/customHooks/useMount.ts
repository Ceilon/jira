/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2021/6/3
 *@Modified By:
 */
import {useEffect} from 'react'


/**
 * componentDidMount
 * @param callback
 */
const useMount = (callback:()=>void) => {
    useEffect(() => {
        if (callback && typeof callback === "function") {
            callback()
        }
    }, [])
}

export default useMount
