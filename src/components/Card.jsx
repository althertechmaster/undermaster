import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import Antigo from '../assets/logo2an.jpg';
import Terror from '../assets/terror.jpg';
import New from '../assets/new.jpg';
import Logotr from '../assets/logo2lor.jpg';
import MovieLogo from "../assets/lg.png";
import { FaInfo, FaInfoCircle, FaPlay } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from '../utils/firebase-config';
import { useEffect } from 'react';
export default function Card({ movieData }) {
const [open, setOpen] = useState(false);
const [open2, setOpen2] = useState(false);
const [open3, setOpen3] = useState(false);

const navigate = useNavigate();
  const shoot = () => {
    setOpen3(true)
  }
  const close = () => {
    setOpen3(false)
  }

  const shoot2 = () => {
    setOpen2(true)
  }
  const close2 = () => {
    setOpen2(false)
  }

  return (
    <Container>
    <div className={`father ${ open3 ? 'father2' : ''}`}
    onMouseEnter={shoot}
    onMouseLeave={close}
    >
      {  <img
            src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
            alt="card"
            onClick={shoot2}
            className={`${ open2 ? 'normal ': 'hover ' } ${ open3 ? 'hover2' : ''}`} 
            
          />    }
    
       
            
            { open3 && <h5 className='cardTitle'>{movieData.name} </h5>}
            { open3 ?   <div className='flexCard flex'><a  onClick={() => navigate(`/player?${movieData.filme}`)} ><FaPlay className='final2'/></a>
            <a onClick={shoot2}><FaInfoCircle className='final'/></a>
        
            </div> :  ''}
           
              <div className={open2 ? 'open':'hide'}>
      
                <div className={`${ open2 ? 'showModal' : 'modal'}`} 
                style={{ backgroundImage:`url(${movieData.cat == 'terror' ? Terror : ''} 
                ${movieData.cat == 'antigos' ? Antigo : ''}
                ${movieData.cat == 'Novo' ? New : ''}
                ${movieData.cat == 'popular' ? New : ''}
                )`}}
                
                >
         <div className="modalInfo">
          <a className="exit" onClick={close2}>X</a>
       <h1>{movieData.name}</h1>
         <h6><>{'Nota 00% (calculado em breve)'}<a>{movieData.cat}</a><text>TV - Filmes</text></></h6>
          </div>
          <div className="infoM">
            {movieData.desc}
        </div>
        <div className="flex">
      
              <button    onClick={() => navigate(`/player?${movieData.filme}`)} className="btnN flex j-center a-center sumir assistir" >
              <h5>Assistir  <FaPlay className='faplay'/></h5>  
              </button>
              </div>
           
          </div>

    </div>
    </div>
    </Container>
  )
}const Container = styled.div`
.final{
  opacity: 0.7;
} .final:hover{
  opacity: 1.0;
}
.final2{

  opacity: 0.7;
} .final2:hover{
  color: rgba(250, 40, 40, 0.7);
 

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
  color: rgba(255, 70, 70, 0.7);
}
.infoM {
  width: 48%;
}

.btnN {
  margin-top: 20px;
}


video {
  width: 300px;
  height: 140px;
  object-fit: cover;
  border-radius: 0.3rem;
  top: 0;
  z-index: 5;
  position: absolute;
}





.cardTitle {
  margin-top: 5px;
  
}
.flexCard {
  font-size: 15px;
  margin-top: -7px;

}

.masterC{

  display: flex;

}

.masterH{
  display: none;
}


.pai{
  background-color: black;
  width: 100%;
  height: 100%;
}

.father{

  cursor: pointer;
margin: 7px;
  
}
.father2{
  background-color: rgba(50, 50, 50, 0.5);
  padding-bottom: 20px;
  border-radius: 20px;
 
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


.normal{
  position: relative;
  cursor: pointer;
  height: 180px;
  img {
    width: 40%;
    height: 140px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 0.3rem;
    top: 0;
    z-index: 4;
    position: absolute;
    transition-property: width;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;
  }
}
.hover{
  position: relative;
  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
  height: 130px;
  img {
    width: 40%;
    
    height: 140px;
    object-fit: cover;
    border-radius: 15px;
    top: 0;
    z-index: 4;
    position: absolute;
  }
} 


.hover2{
  position: relative;
  height: 140px;
  border-radius: 6px;
  img {
    width: 40%;
    
    height: 140px;
    object-fit: cover;
    border-radius: 0.3rem;
    top: 0;
    z-index: 4;
    position: absolute;
  }
} 








.open{
  z-index: 99;
  height: 60%;
  width: 90%;

  position: fixed;
  left: 5%;
  top: 20%;
}
.hide{
  display: none;
  z-index: 99999;
}










`
