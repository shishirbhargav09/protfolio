import React from 'react'
import styled from 'styled-components'

function SkillCard({image , name}) {
  return (
    <Container>
        <div className="img">
        <img src={image} alt={name} />
        </div>
        <h3>
            {
                name
            }
        </h3>
    </Container>
  )
}

export default SkillCard

const Container = styled.div`
 border-radius: 6px;
 background-color: white;
 overflow: hidden;
 width: 150px;
 padding: 0.5rem;
 margin: 1rem;
 box-shadow: 4px 5px 14px -2px rgba(0,0,0,0.75);
-webkit-box-shadow: 4px 5px 14px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 4px 5px 14px -2px rgba(0,0,0,0.75);
&:hover{
  transition: 0.8s ease;
  transform: scale(1.1);
}
     .img{
       height: 110px;
      img {
        height: 100%;
        object-fit: contain;
      }
     }

     @media only screen and (max-width: 480px) {
 width: 110px;
    margin: 1rem 0.4rem;
    padding: 0.2rem;
    .img{
       height: 80px;
      img {
        height: 100%;
        object-fit: contain;
      }
     }

  }
`