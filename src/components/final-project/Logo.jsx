import styled from "styled-components";

export const Logo = styled.div`
    --size : ${(props)=>props.size};
    background:${(props)=>(props.inverse? "#0F1623":"white")};
    height: var(--size);
    width: var(--size);
    ${(props)=> props.circle && "border-radius:50%;"}

`
