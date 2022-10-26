import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "../assets/logo.png"
export default function Header(props) {
    const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={Logo} alt="logo" />
         </div>
         <button className="sign" onClick={() => navigate(props.login ? "/login" : "/signup")}>
            {props.login ? "Login" : "Cadastrar"}</button>
    </Container>
  )
}
const Container = styled.div`
padding: 0 4rem;
.logo {
    img{
      margin-top: 14px; 
        height: 3rem;
    }
}
button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;

}
@media (max-width: 410px){ 
  .logo{ img{height: 35px;
  margin: 10px;
  position: absolute;
  left: -2px;
  top: -2px;
  } }
  button{
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 13px;
  }
}
`;