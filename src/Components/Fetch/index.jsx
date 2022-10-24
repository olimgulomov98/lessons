import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Fetch = () => {
    const [data, setData] = useState([])
    
    
    async function fetchData() {
        await fetch('https://houzing-app.herokuapp.com/api/v1/houses/list',{
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        }).then((response) => response.json())
            .then((response) => setData(response?.data))
    }

        
    useEffect(() => {
        fetchData()
    }, [])

    const deleteHouse = (id) => {
        localStorage.setItem('delete', id)
        fetchData()
    }
  return (
    <div>
        <h4>Fetch</h4>
        {
            data?.map((value) => {
                return(
                    <div key={value?.id}>
                        {value?.id} - {value?.name} -  {value?.country} -  {value?.houseDetails?.room} -  {value?.user?.name} - {value?.user?.lastname} - {value?.user?.email} - 
                        <img width={'100px'} src={value?.attachments[0].imgPath} alt='img' />
                        <button onClick={() => deleteHouse(value.id)}>delete {value.id}</button>
                        <button onClick={() => localStorage.setItem('edit', value.id) }>edit {value.id}</button>
                    </div>
                )
            })
        }
    </div>
  )
}