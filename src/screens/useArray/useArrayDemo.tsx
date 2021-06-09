import react from 'react'
import {useArray} from 'utils/utils'

interface person {
    name: string,
    age: number
}

interface UseArray {
    value: person[],
    add: (person: person) => void,
    removeIndex: (index: number) => void,
    clear: () => void
}

export const UseArrayDemo = () => {
    let persons: person[] = [{name: 'jack', age: 25}, {name: 'ma', age: 22}]
    const {value, add, removeIndex, clean} = useArray(persons)
    return <div>
        <button onClick={() => add({name: 'liu', age: 12})}>add john</button>
        <button onClick={() => removeIndex(0)}>remove 0</button>
        <button onClick={clean}>clear</button>
        {
            value.map((person, index) => <div key={index}>
                <span style={{color: 'red'}}>{index}</span>
                <span>{person.name}</span>
                <span>{person.age}</span>
            </div>)
        }
    </div>
}
