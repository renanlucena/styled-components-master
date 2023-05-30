import React from "react";
import styled from "styled-components";
import Item from "../Item";

const Itens = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;

`
// eslint-disable-next-line import/no-anonymous-default-export
export default ({id, type, from, value, date}) => {
    return <Itens>
        <Item type={type} from={from} value={value}></Item>
        <span>{date}</span>
    </Itens>;
}