import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Axios = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios({
           method: "GET",
           url: 'https://jsonplaceholder.typicode.com/todos' 
        }).then((response) =>  setData(response?.data))
    }, [])

    console.log(data, 'axios data')
  return (
    <div>
        <h4>Axios</h4>
        {
            data?.map((value) => {
                return(
                    <div key={value?.id}>
                        {value?.id} - {value?.title}
                    </div>
                )
            })
        }
    </div>
  )
}