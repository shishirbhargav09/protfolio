import React from "react";
import styled from "styled-components";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";

function Projects() {
  return (
    <Container>
      <h2>Projects</h2>
      <hr />
      <p>Here you will find some of the personal projects that I created</p>
      {/* project1 */}
      <div className="project">
        <div className="img">
          <img src={img2} alt="project 1" />
        </div>

        <div className="project_desc">
          <h3>Watch Store - Ecommerce App</h3>
          <p>Its a Smart Watches Ecommerce app </p>
          <div className="buttons">
            <a href="https://watchstore.shishirbhargav09.vercel.app/">
              <Button>Live Demo</Button>
            </a>
            <a href="https://github.com/shishirbhargav09/ecommerce">
              <Button>GitHub</Button>
            </a>
          </div>
        </div>
      </div>
      {/* project 2 */}
      <div className="project">
        <div className="img">
          <img src={img5} alt="project 2" />
        </div>

        <div className="project_desc">
          <h3>KeepNotes - A Notes App</h3>
          <p>Its a note making app</p>
          <div className="buttons">
            <a href="https://keepnotes-shishirbhargav09.vercel.app/">
              <Button>Live Demo</Button>
            </a>
            <a href="https://github.com/shishirbhargav09/keepnotes">
              <Button>GitHub</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="img">
          <img src={img3} alt="project 3" />
        </div>

        <div className="project_desc">
          <h3>Neoflix - A Video Streamin App</h3>
          <p>Its a video streaming app </p>
          <div className="buttons">
            <a href="https://neoflix-shishirbhargav09.vercel.app/">
              <Button>Live Demo</Button>
            </a>
            <a href="https://github.com/shishirbhargav09/neoflix">
              <Button>GitHub</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="img">
          <img src={img4} alt="project 4" />
        </div>

        <div className="project_desc">
          <h3>CRYPTOMANIA - Cryptocurrency App</h3>
          <p>
            Cryptocurrency app that shows real time data of Cryptocurrencies and
            Listed Exchanges{" "}
          </p>
          <div className="buttons">
            <a href="https://crypto-mania-shishirbhargav09.vercel.app/">
              <Button>Live Demo</Button>
            </a>
            <a href="https://github.com/shishirbhargav09/CryptoMania">
              <Button>GitHub</Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;

const Button = styled.div`
  background-color: white;
  color: black;
  border: 1px solid #3182ce;
  width: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin: 0 1rem;
  padding: 0.5rem;
  font-size: large;
  &:hover {
    cursor: pointer;
    transition: 0.8s ease;
    background-color: #3182ce;
    color: white;
  }
`;
const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;
  .img {
    height: 12rem;
    width: 50%;
    padding: 0.5rem;
    margin: 0.5rem;
    @media only screen and (max-width: 850px) {
        width: 90%;
        max-width: 30rem;

    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  .project {
    width: 90%;
    max-width: 60rem;
    /* padding: 1rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* overflow: hidden; */
    margin: 4rem 0;
    gap: 2rem;
    @media only screen and (max-width: 850px) {
      flex-direction: column;
    }
    .project_desc {
      width: 50%;
      margin: 1rem;
      text-align: center;
      display: flex;
    justify-content: center;
    align-items: center;
      flex-direction: column;

      @media only screen and (max-width: 850px) {
        width: 90%;
        text-align: center;
      }
      .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
