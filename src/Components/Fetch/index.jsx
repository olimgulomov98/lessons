import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Fetch = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://houzing-app.herokuapp.com/api/v1/houses/list', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => response.json())
            .then((response) => setData(response?.data))

    }, [])
    console.log(data, 'data')
  return (
    <div>
        <h4>Fetch</h4>
        {
            data?.map((value) => {
                return(
                    <div key={value?.id}>
                        {value?.id} - {value?.name} -  {value?.country} -  {value?.houseDetails?.room} -  {value?.user?.name} - {value?.user?.lastname} - {value?.user?.email} - 
                        <img width={'100px'} src={value?.attachments[0].imgPath} alt='img' />
                    </div>
                )
            })
        }
    </div>
  )
}