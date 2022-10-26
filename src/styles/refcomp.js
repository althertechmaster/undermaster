import styled, { css } from "styled-components"
export const MagicSquare = styled.div`
width: 300px;
height: 300px;
border: 2px solid black;
background-color: red;
@media (min-width: 768px){
    background-color: orange;
}
`