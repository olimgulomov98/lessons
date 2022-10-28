import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../utils/data'

export const ProductDetails = () => {
    const param = useParams()
    const filtered = data.filter((value) => value.id === +param.id.replace(':', ''))
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>ProductDetails</h1>
        {
            filtered.map(({id, title, description}) => { 
                return(
                    <div key={id}>
                        {id} - {title} - {description}
                    </div>
                )
            })
        }
    </div>
  )
}
