import React, { useState } from "react";
import styled from "styled-components";
import profileimg from "../assets/1.webp";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  const [togglemenu, setTogglemenu] = useState(false);
  return (
    <>
      <Container>
        <div className="nav_left">
          <div className="profileimg">
            <img src={profileimg} alt="profileimg" />
          </div>
          <h1>Shishir Bhargav</h1>
        </div>
        <div className="nav_right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Projects</li>
          </ul>
          {!togglemenu && (
            <AiOutlineMenu
              onClick={(e) => {
                e.stopPropagation();
                setTogglemenu(!togglemenu);
              }}
            />
          )}
          {togglemenu && (
            <AiOutlineClose
              onClick={(e) => {
                e.stopPropagation();
                setTogglemenu(!togglemenu);
              }}
            />
          )}
        </div>
      </Container>
      {togglemenu && (
        <MenuIems
          onClick={() => {
            setTogglemenu(!togglemenu);
          }}
        >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </MenuIems>
      )}
    </>
  );
}

export default Navbar;

const MenuIems = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  display: none;
  @media only screen and (max-width: 1000px) {
        display: block;
      }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 1rem 1rem;
      font-size: 1.2rem;
      font-weight: 400;
      
    }
  }
`;
const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav_right {
    margin: 1rem;
    ul {
      list-style: none;
      display: flex;
      @media only screen and (max-width: 1000px) {
        display: none;
      }
      li {
        margin: 0 1rem;
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
    svg {
      font-size: 2rem;
      display: none;
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }

      @media only screen and (max-width: 1000px) {
        display: block;
      }
    }
  }

  .nav_left {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    h1 {
        font-size: 2rem;

      font-weight: 500;
      align-self: center;
      font-family: "Times New Roman", Times, serif;
      @media only screen and (max-width: 360px) {
        font-size: 1.5rem;
       
      }
    }
    .profileimg {
      height: 55px;
      width: 55px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-self: center;
      margin: 1rem;

      border: 2px solid #000000;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
