import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar';
import BackgroundImage from '../assets/home.jpg';
import LogoLor from '../assets/logo2lor.jpg'
import MovieLogo from "../assets/lg.png";
import { FaInfoCircle, FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Footer from '../components/Footer';
import NewSlider from '../components/NewSlider';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';


export default function Underflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();  
  const [open, setOpen] = useState(false);
  const [ema, setEma] = useState('');
  
  useEffect(() => {
    dispatch(getGenres());
  }, [])


  useEffect(() => {
 
      dispatch(fetchMovies({ type: "all" }));
      onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEma(currentUser.email)
         });
    
  }, []);



  


window.onscroll =() => {
  setIsScrolled(window.pageYOffset === 0 ? false : true);
  return () => (window.onscroll = null);
}

  return (
    <Container>
   
      <NavBar isScrolled={isScrolled} currentEmail={ema}/>
      <div className="hero">
<div className='gradient'></div>
        <img 
        src={BackgroundImage} 
        alt="Background"
        className="background-image background-image2"
        />
        <div className="container">
        <div className="desc">The Lord of the Rings: The Rings of Power é uma série de televisão via streaming estadounidense produzida com base no romance de fantasia O Senhor dos Anéis e seus apêndices de J. R. R. Tolkien. Foi desenvolvida por J. D. Payne e Patrick McKay para o serviço de streaming Prime Video. EM UPLOAD!
        </div> 
       
            <img className="containerLogo fx1" src={MovieLogo} alt="Movie Logo"/>
          
          <div className="buttons flex " >
          <FaInfoCircle onClick={() => {setOpen(true)}} className='finalM'></FaInfoCircle>
          <div className={`${ open ? 'showModal' : 'modal'}`} style={{ backgroundImage:`url(${LogoLor})` }}>
         <div className="modalInfo">
              <img 
        src={MovieLogo} 
        alt="Background"
        className="logo2"
        />
         <h6>Nota 97% <a>2022</a><text>TV - Séries</text></h6>
          </div>
          <div className="infoM">The Lord of the Rings: The Rings of Power é uma série de televisão via streaming estadounidense produzida com base no romance de fantasia O Senhor dos Anéis e seus apêndices de J. R. R. Tolkien. Foi desenvolvida por J. D. Payne e Patrick McKay para o serviço de streaming Prime Video.
        </div>

        <a className="exit" onClick={() => {setOpen(false)}}>X</a>
          <button onClick={() => navigate(`/player?aneisdopoder.mp4?alt=media&token=79e8a065-7c20-49a3-99a6-49f9b6282112`)} 
          className=" flex j-center a-center sumir" >
              <h5>Trailer</h5><FaPlay /> 
              </button>
        
          </div>
            <button  className="button2 flex j-center a-center play sumir" >
              <FaPlay />Breve
              
            </button >
            <button onClick={() => {
          setOpen(true);
        }} className="button2 flex j-center a-center info sumir">
              <AiOutlineInfoCircle /> Info
            </button>
            
          </div>
          
        </div>
      </div>
     <NewSlider movies={movies}/> 

     
  
      
     <Footer />

    </Container>
  )
}
const Container = styled.div`
.finalM{
  display: none;
  opacity: 0.4;
  color: rgba(50, 250, 50, 0.5);
  font-size: 30px;
  position: absolute;
  left: -40px;
  top: 180px;
} .finalM:hover{
  opacity: 0.7;
}
.button2 {
 
  opacity: 0.7;
 
     z-index: 40;
    
     border: none;
     
     transition: 0.2s ease-in-out;
     &:hover {
       opacity: 0.9;
     }
     &:nth-of-type(2) {
       background-color: rgba(109, 109, 110, 0.7);
       color: white;
       svg {
         font-size: 1.8rem;
       }
     }
   }


.gradient{
  background-image: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  position: absolute;
z-index: 30;
  width: 100%;
  bottom: 0px;
  height: 300px;
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
h5{padding-top: 3px;}
.imgLor{
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
}
.logo2{
  height: 70px;
  margin-bottom: 15px;
  
}
.infoM{
  margin-top: 10px;
  margin-bottom: 14px;
  max-width: 590px;
  font-size: 15px;
  color: rgb(200,200,200);
}
.modalInfo h6{
  color: green;
  a{
    color: whitesmoke;
  }
  text{
    color: orange;
    margin-left: 5px;
    border: rgb(130,130,130) solid 2px;
    padding: 1px 4px;
    font-size: 14px;
  }
}




.modal{

  
 
  width: 400px;
  height: 400px;
  z-index: 60;
  position: fixed;

}

.showModal{
  position: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: 60;
  left: 0px;
  top: 30%;
  width: 100%;
  padding: 30px;
  height: 60%;
  background-color: black;

}

.desc{
  position: absolute;
  top: -320px;
  max-width: 600px;
  z-index: 50;
  left: 70px;
  color: #c9c9c9;
  font-size: 15px;
}
.containerLogo{
     
  top: -37vw;
  left: 70px;


   position: absolute;
 }







  background-color: black;
  .hero {
    margin-bottom: 155px;
    position: relative;
    .background-image {
      height: auto;
      width: 100vw;
      filter: brightness(40%);
    }
   
  
    .container {
      position: absolute;
      bottom: 5rem;
      .fix01{
        margin-top: 100px;
      }

      .buttons {
       position: absolute;
        margin: 5rem;
        top: -17rem;
        left: 10px;
        gap: 2rem;
        z-index: 70;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:  {
            opacity: 0.9;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            margin-left: -15px;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1215px){
    .containerLogo{
     
      top: -32vw;
      left: 70px;
    
    
       position: absolute;
     }
    
    .info {
      position: absolute;
      top: 90px;
      left: 163px;
    }
    .play {
      position: absolute;
      top: 90px;
      left: -21px;
    
   
    }

    .desc{
      position: absolute;
      top: -220px;
      left: 70px;
      color: #c9c9c9;
      font-size: 15px;
    }


   }
  @media (max-width: 1115px){ 







    .desc{
      position: absolute;
      top: -220px;
      left: 70px;
      color: #c9c9c9;
      font-size: 15px;
    }







    
    .containerLogo{
     
      top: -360px;
      left: 50px;
    
  
       position: absolute;
     }



    .info {
      left: 130px;
      height: 40px;
      width: 60px;
      width: 140px;
      line-height: 1px;
      font-size: 10px;
      
    }
    .play {
      height: 40px;
      width: 140px;
      font-size: 10px;
      left: -35px;
    }
    .button2 {
 
      opacity: 0.5;
      position: absolute;
         top: 8rem;
         z-index: 40;
         padding-right: 2.4rem;
         border: none;
         cursor: pointer;
         transition: 0.2s ease-in-out;
         &:hover {
           opacity: 0.9;
         }
         &:nth-of-type(2) {
           background-color: rgba(109, 109, 110, 0.7);
           color: white;
           svg {
             font-size: 1.8rem;
           }
         }
       }


  }

  @media (max-width: 978px){
    .containerLogo{
     
      top: -34vw;
      left: 7vw;
    
  
       position: absolute;
     }

     .fx1{
      width: 50vw;
      }
      .desc{
        top: -200px;
        left: 70px;
        font-size: 13px;
      }







      
  }








  @media (max-width: 888px){
    .containerLogo{
     
      top: -32vw;
      left: 7vw;
    
  
       position: absolute;
     }

     .fx1{
      width: 50vw;
      }
      .desc{
        top: -155px;
        left: 36px;
        font-size: 13px;
      }
   



      .info {
        top: 140px;
        left: -40px;
        height: 30px;
        width: 20px;
      
        line-height: 1px;
  
       
      }
      .play {
        top: 140px;
        height: 30px;
        
      
        left: 21px;
      
     
      }






      
  }

  @media (max-width: 742px){




    .desc{
      top: -82px;
      left: 36px;
      font-size: 13px;
    }



    .containerLogo{
      
      top: -29vw;
      left: 13vw;
    
    
  
       position: absolute;
     }



     .fx1{
    width: 70vw;
    }


    .info {
      top: 210px;
      left: -40px;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
    .play {
      top: 210px;
      height: 30px;
      
    
      left: 21px;
    
   
    }

  }


  @media (max-width: 590px){ 
    .finalM{
      display: flex;
    }
    .gradient{
      height: 20vh;
    }
    .showModal{
      height: 90%;
      top: 15vh;
      left: 0px;
      overflow-y: auto;
    }
    .modalInfo{
      img{
        height: 60px;
      }
    }
    .desc{
      top: -155px;
      left: 36px;
      font-size: 13px;
    }
    .info {
      display: none;

      top: 140px;
      left: -40px;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
    .play {
      display: none;
      top: 140px;
      height: 30px;
      
    
      left: 21px;
    
   
    }






    .containerLogo{
      width: 400px;
       top: -280px;
       left: 50px;
       
   
        position: absolute;
      }




    .hero {
      position: relative;
      .background-image {
        height: 110vw;
      width: 170vw;
        filter: brightness(40%);
      }
   
    
      .container {
        position: absolute;
        bottom: 5rem;
        .fix01{
          margin-top: 100px;
        }
   
     
        }
      }
    }
 
  


    
  }
  @media (max-width: 490px){ 


   .desc{
    display: none;
   }


    .containerLogo{
      width: 80%;
       top: -14rem;
       left: 50px;
       
   
        position: absolute;
      }




    .hero {
      position: relative;
      .background-image {
        height: 110vw;
      width: 170vw;
        filter: brightness(40%);
      }
   
    
      .container {
        position: absolute;
        bottom: 5rem;
        .fix01{
          margin-top: 100px;
        }
   
     
        }
      }
    }
  



    







  }


  @media (max-width: 410px){ 
    .modalInfo{
      img{
        height: 40px;
      }
    }
    .info {
      top: 140px;
      left: 2vw;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
    .play {
      top: 140px;
      height: 30px;
      
    
      left: 95px;
    
   
    }
  }


  @media (max-width: 410px){
    .play {
      top: 140px;
      height: 30px;
      
    
      left: 75px;
    
   
    }
    .info {
      top: 140px;
      left: -2vw;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
  }
  @media (max-width: 360px){


    .containerLogo{
      
      top: -48vw;
      left: 13vw;
    
    
  
       position: absolute;
     }





    .play {
      top: 180px;
      height: 30px;
      
    
      left: 62px;
    
   
    }
    .info {
      top: 180px;
      left: -4vw;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
  }




  @media (max-width: 344px){


    .containerLogo{
      
      top: -48vw;
      left: 13vw;
    
    
  
       position: absolute;
     }





    .play {
      top: 180px;
      height: 30px;
      
    
      left: 53px;
    
   
    }
    .info {
      top: 180px;
      left: -7vw;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
  }









`;
