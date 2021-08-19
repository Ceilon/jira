/**
 *@Author:ChaiLong
 *@Description:工具类
 *@Date:Created in  2021/6/3
 *@Modified By:
 */
import {useState, useEffect} from 'react'


/**
 * 判断参数类型
 * @param tgt undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap
 * @param type
 * DataType("young"); // "string"
 * DataType(20190214); // "number"
 * DataType(true); // "boolean"
 * DataType([], "array"); // true
 * DataType({}, "array"); // false
 * @returns {*} true || false
 */
export function dataType(tgt: any, type: string) {
    const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();
    return type ? dataType === type : dataType;
}


/**
 * 判断数组是否存在
 * @param arr
 * @returns {boolean} true不为空数组false为空数组
 */
export const existArr = (arr: any[]) => {
    return Array.isArray(arr) && arr.length ? arr : false;
}

/**
 * 判断对象是否存在
 * @param obj
 */
export const existObj = (obj: {}) => {
    return dataType(obj, "object") && Object.keys(obj).length ? obj : false;
}

/**
 * 去除零为无效数字
 * @param value
 * @returns {boolean}
 */
export const isFalsy = (value: unknown) => value === 0 ? true : !!value;


export const isVoid = (value: unknown) =>
    value === undefined || value === null || value === "";

/**
 * 清理空键值对
 * @param object
 * @returns {*}
 */
export const cleanObject = (object?: { [key: string]: unknown }):any => {
    // Object.assign({}, object)
    if (!object) {
        return {};
    }
    const result = { ...object };
    Object.keys(result).forEach((key) => {
        const value = result[key];
        if (isVoid(value)) {
            delete result[key];
        }
    });
    return result;
};


/**
 * 控制重复调用
 * @param value
 * @param delay
 * @returns {function(): void}
 */
export const useDebounce = (value: any, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(timer)
    }, [value, delay])
    return debounceValue
}


/**
 *
 * @param persons
 */
export const useArray = <A>(persons: A[]) => {
    const [value, setPerson] = useState(persons)
    const add = (person: A): void => {
        setPerson([...value, person])
    }
    const removeIndex = (index: number): void => {
        let a = [...value];
        a.splice(index, 1)
        setPerson(a)
    }

    const clean = (): void => {
        setPerson([])
    }

    return {value, add, removeIndex, clean}
}
