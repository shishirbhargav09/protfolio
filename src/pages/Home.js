import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profileimg from "../assets/1.webp";

function Home() {
  return (
    <Container>
      <div className="profileimage">
        <img src={profileimg} alt="profileimg" />
      </div>
      <h1>HEY, I'M SHISHIR BHARGAV</h1>
      <p>
        A Full Stack Web Developer building the MERN Websites and Web
        Applications that leads to the success of the overall product
      </p>
      <div className="buttons">
      <Link to='/about' ><Button>About Me</Button></Link>
      <Link to='/projects' ><Button>Projects</Button></Link>
      </div>
    </Container>
  );
}

export default Home;
const Button = styled.div`
background-color: #3182CE;
color: white;
width: 100px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
border-radius: 7px;
margin: 0 2rem;
padding: 0.5rem;
font-size: large;
&:hover{
    cursor: pointer;
    background-color: #32A2CE;
}

`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 150px);
  .profileimage {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    overflow: hidden;
    margin: 2rem;

    border: 2px solid #a54583;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  h1 {
    font-weight: 500;
    text-align: center;
    font-size: 2.5rem;
    padding: 0 0.5rem;

    /* font-family: ; */
  }
  p {
    width: 90%;
    max-width: 45rem;
    margin: 2rem;
    font-size: large;
    text-align: center;
    font-size: 1.5rem;
  }
  .buttons{
    display: flex;
  }
`;
