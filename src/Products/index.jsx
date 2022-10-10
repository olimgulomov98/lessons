import React, {useState} from 'react';
import {Container} from './style'
import {data} from './data'
const Products = () => {
    const [state, setState] = useState(data)
    const [check, setCheck] = useState(false)
    const [ids, setIds] = useState(null)
    var totalCount = 0;
    var totalPrice = 0;

    const onChecbox = (e, id) => {
        setCheck(e.target.checked)
        setIds(id)
    }
    
    const increment = (id) => {
        let res = state.map((value) => value.id === id ? {...value, quantity: value.quantity + 1} : value) 
        setState(res)
    }

    const decrement = (id) => {
        let res = state.map((value) => value.id === id && value.quantity > 1 ? {...value, quantity: value.quantity - 1} : value) 
        setState(res)
    }
    return (
        <Container>
            <Container.Wrapper>
                <Container.Input placeholder='Add an Item...' />
                <Container.Add>Add</Container.Add>
            </Container.Wrapper>
            <Container.Products>
                {
                    state.map((value) => {
                        totalCount += value.quantity 
                        totalPrice += value.quantity * value.price
                        return (
                        <Container.Item key={value.id}>
                            <Container.Checkbox type='checkbox' onChange={(e) => onChecbox(e, value.id)}  />
                            <Container.Title check={check}>{value.title}</Container.Title>
                            <Container.Title check={check}>${value.price}</Container.Title>
                            <Container.Box>
                                <Container.Plus onClick={() => increment(value.id)}  />
                                    <Container.Count>{value.quantity}</Container.Count>
                                <Container.Minus onClick={() => decrement(value.id)} />
                            </Container.Box>
                        </Container.Item>
                    )
                }
                    )
                }
                <Container.Total>Total Count: {totalCount} ------ Total Price: ${totalPrice}</Container.Total>
            </Container.Products>
        </Container>
    )
}

export default Products