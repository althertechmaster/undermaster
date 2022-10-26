import React from 'react'
import Card from './Card';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styled from "styled-components";
export default function NewSlider({ movies }) {


  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };


  const moives2 = movies.slice(0,7);
  const moives3 = movies.slice(7,14);
  const moives4 = movies.slice(14,21);
  const moives5 = movies.slice(21,28);


  return (
    
    <Container>
    <div className="fxDiv">  <h5 className="title">Novos Filmes</h5></div>
    <div className="back" onClick={()=> {document.querySelectorAll('.scrollmenu')[0].scrollLeft -= 250;}}>  <h1> <FaAngleLeft/> </h1></div>
    <div className="next" onClick={()=> {document.querySelectorAll('.scrollmenu')[0].scrollLeft += 250;}}>  <h1> <FaAngleRight/> </h1></div>
<div className="scrollmenu">
   {moives2.map((movie, index) => {
              return <Card movieData={movie} index={index} key={movie.id} />;
          })}

    </div>



    <div className="fxDiv">  <h5 className="title2">Terror</h5></div>
    <div className="back2" onClick={()=> {document.querySelectorAll('.scrollmenu')[1].scrollLeft -= 250;}}>  <h1> <FaAngleLeft/> </h1></div>
    <div className="next2" onClick={()=> {document.querySelectorAll('.scrollmenu')[1].scrollLeft += 250;}}>  <h1> <FaAngleRight/> </h1></div>

    
    <div className="scrollmenu">
       {moives3.map((movie, index) => {
                  return<Card movieData={movie} index={index} key={movie.id} />;
              })}
    
        </div>



        <div className="fxDiv">  <h5 className="title2">Mais Antigos</h5></div>
        <div className="back2" onClick={()=> {document.querySelectorAll('.scrollmenu')[2].scrollLeft -= 250;}}>  <h1> <FaAngleLeft/> </h1></div>
        <div className="next2" onClick={()=> {document.querySelectorAll('.scrollmenu')[2].scrollLeft += 250;}}>  <h1> <FaAngleRight/> </h1></div>

    <div className="scrollmenu">
       {moives4.map((movie, index) => {
                  return<Card movieData={movie} index={index} key={movie.id} />;
              })}
    
        </div>
        <div className="fxDiv">  <h5 className="title2">Popular</h5></div>
        <div className="back2" onClick={()=> {document.querySelectorAll('.scrollmenu')[3].scrollLeft -= 250;}}>  <h1> <FaAngleLeft/> </h1></div>
        <div className="next2" onClick={()=> {document.querySelectorAll('.scrollmenu')[3].scrollLeft += 250;}}>  <h1> <FaAngleRight/> </h1></div>

    <div className="scrollmenu">
       {moives5.map((movie, index) => {
                  return<Card movieData={movie} index={index} key={movie.id} />;
              })}
    
        </div>

     </Container>
  )
}
const Container = styled.div`

margin-top: -150px;
.back{
  position: absolute;
  margin-top: 20px;
  z-index: 59;
  border-radius: 15px;
  margin-left: 0%;
  background-color: rgba(0, 0, 0, 0.57);
  padding: 60px 12px;
  cursor: pointer;
}

.next{
  position: absolute;
  margin-top: 20px;
   z-index: 59;
  border-radius: 15px;
   margin-left: 95.5vw;
  background-color: rgba(0, 0, 0, 0.57);
  padding: 60px 12px;
  cursor: pointer;
}

.back2{
  position: absolute;
  margin-top: -50px;
     z-index: 59;
  border-radius: 15px;
   margin-left: 0%;
   background-color: rgba(0, 0, 0, 0.57);

  padding: 60px 12px;
  cursor: pointer;
}

.next2{
  position: absolute;
  margin-top: -50px;
   z-index: 59;
  border-radius: 15px;
   margin-left: 95.5%;
   background-color: rgba(0, 0, 0, 0.57);

  padding: 60px 12px;
  cursor: pointer;
}

.title2{
  z-index: 50;
  color: smokewhite;
  position: absolute;
  margin-left: 2em;
  margin-top: -3.5em;
 }

.title{
  z-index: 50;
 color: smokewhite;
 position: absolute;
 margin-left: 2em;
 margin-top: -0.5em;

}




.scrollmenu {
  transition-property: all;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
  margin-top: -70px;
margin-left: 2vw;
  overflow-x: auto;
 height: 350px;
 display: flex;
  padding-top: 40px;
  touch-action: auto;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
  height: 0px;                 
  background-color: transparent;
}
}

div.scrollmenu a {
  touch-action: auto;
  display: inline-block;
  padding-left: 14px;
 
  transition-property: all;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
}

@media (max-width: 1115px){ 
  .next{
    margin-left: 94.5%;
  }
  .next2{
    margin-left: 94.5%;
  }
}

@media (max-width: 850px){ 
  .next{
    margin-left: 92.5%;
  }
  .next2{
    margin-left: 92.5%;
  }
}
@media (max-width: 700px){ 
  .next{
    margin-left: 90.5%;
  }
  .next2{
    margin-left: 90.5%;
  }
}
@media (max-width: 500px){ 
  .next{
    margin-left: 88.8%;
  }
  .next2{
    margin-left: 88.8%;
  }
}



@media (max-width: 400px){ 
  .next{
    margin-left: 86.5%;
  }
  .next2{
    margin-left: 86.5%;
  }
}



`
