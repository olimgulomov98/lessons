import React, {useState, useEffect} from "react";
import { Container } from "./style";

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [data, setData] = useState([])
    const [toggle, setToggle] = useState(false)
    // 1
    useEffect(() => {
        console.log('useEffect 1')
    })

    // 2
    useEffect( () => {
        console.log('useEffect 2')
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response?.json())
            .then(json => setData(json))
    }, [])
    console.log(data,'dataa')

    // 3
    useEffect(() => {
        console.log('useEffect 3')
    }, [name])

    useEffect(() => {
        console.log('useEffect 4')
    }, [name, count])

    const onChange = (e) => {
        setName(e.target.value)
    }
    return(
        <Container>
            <h1>useEffect</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>+</button>
            <p>Name: {name}</p>
            <input type="text" onChange={onChange} />
            <button onClick={() => setToggle(!toggle)}>Get Data</button>
            <table border={1}>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Usename</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>website</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Suite</th>
                    <th>Zipcode</th>
                    <th>Lang</th>
                    <th>Lat</th>
                    <th>Company Name</th>
                </thead>
                <tbody>
                    {
                        data?.map((value) => {
                            return (
                                <tr key={value?.id}>
                                    <td>{value?.id}</td>
                                    <td>{value?.name}</td>
                                    <td>{value?.username}</td>
                                    <td>{value?.email}</td>
                                    <td>{value?.phone}</td>
                                    <td>{value?.website}</td>
                                    <td>{value?.address?.city}</td>
                                    <td>{value?.address?.street}</td>
                                    <td>{value?.address?.suite}</td>
                                    <td>{value?.address?.zipcode}</td>
                                    <td>{value?.address?.geo?.lng}</td>
                                    <td>{value?.address?.geo?.lat}</td>
                                    <td>{value?.company?.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>
    )
}

export default UseEffect