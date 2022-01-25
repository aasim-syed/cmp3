import React from 'react'
import Image from "next/image"
import styled from "styled-components"

const Second = () => {
  return (
    <>
    <Red>

    </Red>
    </>
  )
}

export default Second

const Red = styled.div`
position: relative;
right:0px;
height: 610px;
background: black;
background-blend-mode: darken;
z-index:-1;
left: 0px;
top:0vh;
background:url("https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1);

background-repeat:no-repeat;

border-radius: 33px 33px 33px 33px;
h1{
    position: absolute;
width: 731px;
height: 40px;
left: 194px;
top: 14px;

font-family: Poppins;
font-style: italic;
font-weight: 600;
font-size: 90px;
line-height: 135px;

mix-blend-mode: hard-light;

}
`;