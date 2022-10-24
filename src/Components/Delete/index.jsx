import React from 'react'

export default function Delete() {

        fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${localStorage.getItem('delete')}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => res.json()).then(res => console.log(res))


  return (
    <div>
        <h4>Delete</h4>
    </div>
  )
}