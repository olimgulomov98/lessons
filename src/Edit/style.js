import styled from "styled-components";

const Block = styled.div`
    width: 80%;
    min-height: 400px;
    border: 3px solid teal;
    margin: 40px auto;
    padding: 15px;
    background: grey;
`
const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 5px 10px;
    border: 3px solid teal;
    margin: 7px 0;
    min-height: 50px;
    >div>h1>span{
        color: green;
    }
    >div{
        display: flex;
        align-items: center;
    }
    button{
        padding: 5px 15px;
        border: 3px solid teal;
        border-radius: 3px;
        background: transparent;
        cursor: pointer;
        font-size: 20px;
    }
`
export{Block, Section}