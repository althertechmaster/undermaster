import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import { firebaseAuth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import Header from '../components/Header';
import background from "../assets/login.jpg";

export default function Signup() {
    const [showPassword,setShowPassword] = useState(false);
    const [msgS, setMsgS] = useState("");
    const [formValues,setFormValues] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleSignIn = async () => {
      try {
        const { email, password} = formValues;
       await createUserWithEmailAndPassword(firebaseAuth, email, password);
      } catch (err) {
        setMsgS(err.code);
      }

    }




onAuthStateChanged(firebaseAuth, (currentUser) => {
if (currentUser) navigate("/");
});








    return  <Container showPassword={showPassword}>
      
      <img src={background} className="bgbg" alt="background"/>
    <div className="content">
      
    <Header login/>
    
    <div className="body flex column a-center j-center">
    <div className="text flex column">
        <h1>Filmes Séries, Tv shows e mais</h1>
        <h4>Sem propagantas, totalmente gratuito.</h4>
        <h6>Insira um email e uma senha para cadastrar-se.</h6>
       <h6 className="red">
        {msgS == "auth/email-already-in-use" ? 'Email já cadastrado!' : ''}
        {msgS == "auth/invalid-email" ? 'Email inválido' : ''}
        {msgS == "auth/weak-password" ? 'A senha deve ter no mínimo 6 dígitos' : ''}

       </h6>
        </div>
        <div className='formM'>

          <input className='tofix2' type="email" 
        placeholder="Seu Email"
         name="email"
          value={formValues.email}
           onChange={(e) =>
             setFormValues({
            ...formValues,
            [e.target.name]:e.target.value,
            })
            }
            />

<input className='tofix' type="password"
         placeholder="Senha"
          name="password"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({
           ...formValues,
           [e.target.name]:e.target.value,
           })
           }
          />

          </div>
        <div className='form'>
          
        <input className='tofix2' type="email" 
        placeholder="Seu Email"
         name="email"
          value={formValues.email}
           onChange={(e) =>
             setFormValues({
            ...formValues,
            [e.target.name]:e.target.value,
            })
            }
            />
        {showPassword && (
        <input className='tofix' type="password"
         placeholder="Senha"
          name="password"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({
           ...formValues,
           [e.target.name]:e.target.value,
           })
           }
          />
        
        )}
        {!showPassword && <button className='botaoult' onClick={() => setShowPassword(true)}>cadastrar</button>}
    
        </div>
        <button onClick={handleSignIn}>Finalizar</button>
    </div></div>
     </Container>
  }

  const Container = styled.div`
  .red{
    color: red;
  }
  .bgbg{
    width: 100%;
    height: auto;
  }
 .formM{display: none;}
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: column;
    grid-template-rows: 15vh 85vh;
    .body {
      margin-top: 100px;
      gap: 1rem;
      .text {
       padding: 20px;
        text-align: center;
        font-size: 2rem;
  
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
    }
  }


  .form {
    display: grid;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 1fr" : "2fr 1fr"};
    width: 60%;
    input {
      color: black;
      border: none;
      padding: 1.5rem;
      font-size: 1.2rem;
      border: 1px solid black;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      font-weight: bolder;
      font-size: 1.05rem;
    }
  }


  @media (max-width: 970px){
    .bgbg{
      height: 100vh;
    }

   }


   @media (max-width: 800px){
    .bgbg{
      width: 140vw;
      height: 90vh;
    }

   }

  

  @media (max-width: 750px){ 
   
    .form {
      display: column;
      justify-content: center;
      align-items: center;
      max-width: 350px;
      input {
        color: black;
        border: none;
        padding: 0.2rem;
        font-size: 1.0rem;
        border: 1px solid black;
    
      }
      button{
        height: 30px;
        line-height: 3px;
      }
    }
  }


  @media (max-width: 500px){ 
    .formM{
    display: initial;



    }
    .form {
      display: none;

    
      }

    }
  }



  @media (max-width: 410px){ 
    .bgbg{
      width: 170vw;
      height: 90vh;
    }
  }




  
  @media (max-width: 375px){
    input {
      padding: 0.3rem;
      font-size: 1.2rem;
      margin-left: 12vw;
    }

   }
   @media (max-width: 285px){
    input {
      padding: 0.3rem;
      font-size: 1.2rem;
      margin-left: 7%;
    }

   }
   @media (max-width: 255px){
    input {
      padding: 0.3rem;
      font-size: 1.2rem;
      margin-left: 4%;
    }

   }
   @media (max-width: 240px){
    overflow-y: auto;
    overflow-x: auto;

   }
`;