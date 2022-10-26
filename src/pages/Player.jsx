import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";



export default function Player() {
    const navigate = useNavigate();
    const { vid } = useParams();
 
 const vid2 = 'Charles%20chaplin%20o%20garoto.mp4?alt=media&token=dc7e76d6-785b-4f97-886f-e96723a9c63c';
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
          {console.log('window => ',window.location.href)}
        
        </div>
        <video src={`https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/${window.location.href.slice(29)}`} autoPlay loop controls muted />
      </div>
    </Container>
  )
}
const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      
    }
  }
`;