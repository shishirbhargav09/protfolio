import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <a href='https://github.com/shishirbhargav09' >
        <AiFillGithub/>
        </a>
        <a href="https://www.linkedin.com/in/shishir-bhargav/">
        <AiFillLinkedin/>

        </a>
    </Container>
  )
}

export default Footer

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
svg{
    margin: 0 1rem;
    font-size: 2rem;
    color: gray;
    &:hover{
        color: black;
        cursor: pointer;
    }
}
`