import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import New from '../assets/new.jpg';
import { FaPlay } from 'react-icons/fa';
import styled from "styled-components";
function Register() {
  const [datas, setDatas] = useState([]);
  const [emails, setEmails] = useState([]);
  const baseURL = "http://localhost:8081/videos";
  var varr = false;
  useEffect( () => {
async function master(params) {
  await axios.post(baseURL, [{maria: 'NOE'}]).then((response) => {
     setDatas(response.data[0])
  });
  
}
master();
onAuthStateChanged(firebaseAuth, (currentUser) => {
  if (currentUser){ setEmails(currentUser.email)
  console.log('REGISTER')
  };
});
  }, []);
  
  

  return (
    <div>
<div>{datas.name}</div><div>{datas.idade}</div><div>{datas.sla}</div><div>{emails}





<div className='open'>
      
      <div className='showModal' 
      style={{ backgroundImage:`url(${New})`}}
      
      >
<div className="modalInfo">
<a className="exit" onClick={''}>X</a>
<h1>{'movieData.name'}</h1>
<h6>{'Nota 00% (calculado em breve)'}<a>{'movieData.cat'}</a><text>TV - Filmes</text></h6>
</div>
<div className="infoM">
  {'movieData.desc'}
</div>
<div className="flex">

    <button    onClick={() => ''} className="btnN flex j-center a-center sumir assistir" >
    <h5>Assistir  <FaPlay className='faplay'/></h5>  
    </button>
    </div>
 
</div>

</div>








</div>
      
    
      
    </div>
  );
}

export default Register;
const Container = styled.div`

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
 
  }
}
.hover{
  position: relative;

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
  z-index: 99999;
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
