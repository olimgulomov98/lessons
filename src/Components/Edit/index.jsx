import React from 'react'
import { useRef } from 'react'

export const Edit = () => {

    const nameRef = useRef('')
    const countryRef = useRef('')
    const addressRef = useRef('')
    const priceRef = useRef('')
    const regionRef = useRef('')

    

    const edit = () => {

        console.log(nameRef.current.value, countryRef.current.value, addressRef.current.value, priceRef.current.value)
        fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${localStorage.getItem('edit')}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "address": addressRef.current.value,
                "attachments": [
                  {
                    "imgPath": "string"
                  }
                ],
                "categoryId": 0,
                "city": "string",
                "componentsDto": {
                  "additional": "string",
                  "airCondition": true,
                  "courtyard": true,
                  "furniture": true,
                  "gasStove": true,
                  "internet": true,
                  "tv": true
                },
                "country": countryRef.current.value,
                "description": "string",
                "homeAmenitiesDto": {
                  "additional": "string",
                  "busStop": true,
                  "garden": true,
                  "market": true,
                  "park": true,
                  "parking": true,
                  "school": true,
                  "stadium": true,
                  "subway": true,
                  "superMarket": true
                },
                "houseDetails": {
                  "area": 0,
                  "bath": 0,
                  "beds": 0,
                  "garage": 0,
                  "room": 0,
                  "yearBuilt": 0
                },
                "locations": {
                  "latitude": 0,
                  "longitude": 0
                },
                "name": nameRef.current.value,
                "price": priceRef.current.value,
                "region": regionRef.current.value,
                "salePrice": 0,
                "status": true,
                "zipCode": "string"
              })
        })
    }

  return (
    <div>
        <h3>Edit</h3>
        <input ref={nameRef} type="text" placeholder='Name' />
        <br />
        <input ref={countryRef} type="text" placeholder='Country' />
        <br />
        <input ref={priceRef} type="text" placeholder='Price' />
        <br />
        <input ref={regionRef} type="text" placeholder='Region' />
        <br />
        <input ref={addressRef} type="text" placeholder='Address' />
        <br />
        <button onClick={edit}>edit</button>
    </div>
  )
}