import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { FaPowerOff, FaSearch } from "react-icons/fa"
import { signOut , onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { BiMenu } from 'react-icons/bi';
import New from '../assets/new.jpg';
import { FaPlay } from 'react-icons/fa';
import { useEffect } from 'react';
import axios from 'axios';
const baseURL = "https://undermapi.herokuapp.com/videos";

export default function NavBar({ isScrolled, currentEmail }) {
    const navigate = useNavigate();
    var emailN;
    const close = () => {
      setShowContato(false);
    }
    const close2 = () => {
      setShowAjuda(false);
    }
    const close3 = () => {
      setShowContact(false);
    }
    const close4 = () => {
      setShowSocial(false);
    }
    const close5 = () => {
      setShowMenu(false);
    }
    const [showCon, setShowCon] = useState('aaaa');
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) {navigate("/login")};
         });
      

         const [showContato, setShowContato] = useState(false);
         const [showAjuda, setShowAjuda] = useState(false);
         const [showMenu, setShowMenu] = useState(false);
         const [showContact, setShowContact] = useState(false);
         const [showSocial, setShowSocial] = useState(false);
         const [sucess, setSucess] = useState('');
         const [pedido, setPedido] = useState('');
         


    async function master(params) {
    
      await axios.post(baseURL, [{email: currentEmail, msg: pedido}]).then((response) => {
         setSucess('Enviado com sucesso!');
         setTimeout(() => {
          setSucess('');
         }, 5000);
      });
      
    }


  return (

    <Container>
        <nav className={`nav1 flex ${isScrolled ? "scrolled" : ""}`}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <img className="rsImg" src={logo} alt="logo" />
                </div>
                <ul className="links flex">
                <li onClick={() => setShowContact(true)}>Contato</li>
                <li onClick={() => setShowSocial(true)}>Social</li>
                <li onClick={() => setShowContato(true)}>Pedir Filme</li>
                <li onClick={() => setShowAjuda(true)}>Ajuda</li>

                </ul>
                {showContato &&
                
        
          
                <div className='open'>
      <div className='showModal' 
      style={{ backgroundImage:`url(${New})`}}
      
      >
<div className="modalInfo">
<a className="exit"  onClick={close}>X</a>
<h1>{'Pedido de Filme/Série'}</h1>
<h6>{'Responderei pelo email cadastrado:'} <div className='blurr'>{currentEmail}</div></h6>
<div className="texto">
<h7 >{'Informe o NOME e ANO do FILME ou SÉRIE desejada no espaço abaixo, sinta se a vontade para comentar sobre o filme e passar outro contato pela mensagem. *Respondo quando possível :)'}</h7>
</div>
</div>
<div className="infoM">
 <textarea onChange={(e) => setPedido(e.target.value)} className="text"> </textarea>
</div>
<div className="flex">

    <button   onClick={master} className="btnN flex j-center a-center sumir assistir" >
    <h5>Enviar <FaPlay className='faplay'/></h5>  
    </button>
    </div>{<div className='status'>{sucess}</div>}
 
</div>
</div>
      
                
                }


{showAjuda ?
              
                <div className='open'>
      <div className='showModal' 

      
      >

        
<div className="modalInfo">
<a className="exit"  onClick={close2}>X</a>
<h1>{'Ajuda'}</h1>
<h6>{'Responderei pelo email cadastrado:'} <div className='blurr'>{currentEmail}</div></h6>
<div className="texto">
<h7 >{'Estou fazendo a documentação desse site, para mais informações entrar em contato, ou mandar mensagem diretamente abaixo *Respondo quando possível :)'}</h7>
</div>
</div>
<div className="infoM">
 <textarea onChange={(e) => setPedido(e.target.value)} className="text"> </textarea>
</div>
<div className="flex">

    <button   onClick={master} className="btnN flex j-center a-center sumir assistir" >
    <h5>Enviar <FaPlay className='faplay'/></h5>  
    </button>
    </div>{<div className='status'>{sucess}</div>}
 
</div>
</div>
      
                
        : ''       }





{showContact ?
                  
                  <div className='open'>
        <div className='showModal' 

        
        >
  <div className="modalInfo">
  <a className="exit"  onClick={close3}>X</a>
  <h1>{'Contato'}</h1>
 <a className='nome'> Altair Constâncio Junior</a>
  <div className='itemB'><a className='itemC'>Email: </a> althertechadm@gmail.com</div>
  <div className='itemB'><a className='itemC'>WhatsApp: </a> {`(11) `}93724-2213</div>
  <div className='itemB'><a className='itemC'>Facebook: </a> <a className='nome2' target="_blank" href='https://www.facebook.com/profile.php?id=100087362011131'>Visitar perfil</a></div>
  <div className="texto">

  </div>
  </div>

  <div className="flex">
  
  
      </div>{<div className='status'>{sucess}</div>}
   
  </div>
  </div>
        
                  
          : ''       }






{showSocial ?
                  
                  <div className='open'>
        <div className='showModal' 

        
        >
  <div className="modalInfo">
  <a className="exit"  onClick={close4}>X</a>
  <h1>{'Social'}</h1>
 <a className='nome'> Altair Constâncio Junior</a>
 <div className='itemB'><a className='itemC'>Facebook: </a> <a className='nome2' target="_blank" href='https://www.facebook.com/profile.php?id=100087362011131'>Visitar perfil</a></div>
 <div className='itemB'><a className='itemC'>Instagram: </a> <a className='nome2' target="_blank" href='https://www.instagram.com/altairtech23/'>Visitar perfil</a></div>
 <div className='itemB'><a className='itemC'>LinkedIn: </a> <a className='nome2'>Em breve </a></div>
  <div className="texto">

  </div>
  </div>

  <div className="flex">
  
  
      </div>{<div className='status'>{sucess}</div>}
   
  </div>
  </div>
        
                  
          : ''       }



{showMenu ?
                  
                  <div className='open'>
        <div className='showModal' 

        
        >
  <div className="modalInfo4">
  <a className="exit"  onClick={close5}>X</a>
  <h1>   <img className='logoult' src={logo} alt="logo" /></h1>

                <div className='mobileText' onClick={() => {setShowContact(true); setShowMenu(false)}}>Contato</div>
                <div className='mobileText' onClick={() => {setShowSocial(true); setShowMenu(false)}}>Social</div>
                <div className='mobileText' onClick={() => {setShowContato(true); setShowMenu(false)}}>Pedir Filme</div>
                <div className='mobileText' onClick={() => {setShowAjuda(true); setShowMenu(false)}}>Ajuda</div>
                <div className='mobileText' onClick={() => {signOut(firebaseAuth)}}>Sair</div>


                

  </div>


   
  </div>
  </div>
        
                  
          : ''       }


                <div onClick={() => setShowMenu(true)} className="menuMobile"><BiMenu/></div>
            </div>
            <div className="right flex a-center">
            <button onClick={() => signOut(firebaseAuth)}>
                    <FaPowerOff />
                </button>
          
            </div>
        </nav>
    </Container>
  )
}


const Container = styled.div`
.logoult{
  height: 40px;
}
.mobileText{
  cursor: pointer;
  font-size: 20px;
  line-height: 40px;
  color: rgba(190, 190, 190, 0.8);
}.mobileText:hover{
  color: rgba(250, 120, 120, 1.0);
}
.showModal{
  border-radius: 30px;
  top: 20vh;
  width: 100%;
  left: 0px;
}
.modalInfo4{
  width: 100%;
  padding: 20px;
  border-radius: 20px;
 display: flex;
 flex-flow: column nowrap;
 justify-content: center;
 align-items: center;
;
}
.nav1{
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
  z-index: 99;
}
.itemB {
  color: whitesmoke;
}
.itemC {
  color: rgb(130, 130, 130);
  text-decoration: none;
  font-size: 17px;
}
.nome2{
text-decoration: none;
  color: rgb(230, 130, 130);
}
.nome{
  text-decoration: none;
  color: rgb(255, 130, 130);
  font-size: 20px;

}
.contact2{
  color: white;
}
.blurr{
  color: rgb(130, 130, 130);
  font-size: 13px;
}
.status{
  color: green;
}
.texto{
  max-width: 500px;
  z-index: 99;
}
.text{
  resize: none;
  width: 400px; 
  background-color: black;
  color: white;
  z-index: 99;
}
h6 {
  a{
    margin-right: 10px;
  }
}

.assistir{
  background-color: rgba(250, 250, 250, 0.7);
  padding-top: 4px;
} .assistir:hover{
  background-color: rgba(250, 200, 200, 0.7);
}
.faplay{
  margin-top: -4px;
  color: rgba(250, 30, 30, 0.6)
}

.infoM {
  width: 48%;
}

.btnN {
  margin-top: 20px;
}

.cardTitle {
  margin-top: 5px;
  z-index: 999;
  
}
.flexCard {
  font-size: 15px;
  margin-top: -7px;
  z-index: 999;

}
.exit{
  position: absolute;
  right: 30px;
  top: 10px;
  color: rgba(255, 70, 70, 0.9);
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
}
h5{padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 15px;
  cursor: pointer;
  padding-right: 15px;
.icon{
  padding: 10px;
}
}



.open{
  z-index: 99;
  height: 60%;
  width: 90%;
  position: fixed;
  top: 20%;
}
  .scrolled {
    background-color: black;
    z-index: 999;
  }
  .menuMobile {
    display: none;
    color: rgb(300, 100, 100);
    font-size: 37px;
  }
  .rsImg {
    height: 2.4rem;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        
      }
      .links {
        list-style-type: none;
        gap: 2rem;
  
        li {
          cursor: pointer;
          opacity: 0.7;
          a {
            color: white;
            text-decoration: none;
          }
        } li:hover{
          opacity: 1.0;

        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }

  @media (max-width: 788px){

    nav {
      height: 5.5rem;
    }
    .rsImg {
      height: 2rem;
      position: absolute;
      left: 20px;
      top: 32px;
    }


    .links {
    
      display: none;
    }

    .menuMobile {
      position: absolute;
      right: 40px;
      top: 15px;
      list-style: none;
      cursor: pointer;
      display: inline;
    } .menuMobile:hover {
      color: rgba(255, 50, 50, 1.0);
    }
    .right {
      display: none;
    }


  }

  @media (max-width: 680px){




    .text{
      resize: none;
      width: 200px; 
      background-color: black;
      color: white;
      z-index: 99;
    }
 


  }








`;