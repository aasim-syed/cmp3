import React from 'react'
import Image from "next/image"
import styled from "styled-components"
import Heroimg from "../../public/hero.jpg"
const Navbar = () => {
  return (
    <>
    <Navbar1>
       <li> <h1 className='compname'><a href="https://www.linkedin.com/in/syed-aasim/">CARRER.<span style={{color:'white'}}>MP$</span></a></h1> </li>
       <a href="https://github.com/aasim-syed"><li> <h1 className='home'>HOME</h1> </li></a>
       <li> <h1 className='about'>ABOUT.<span style={{color:'white'}}>U$</span></h1> </li>    

    </Navbar1>
    
    </>
  )
}

export default Navbar

const Navbar1 = styled.div`
position: absolute;

height: 76px;
right:0px;
left: 0px;
top: 0px;
display:flex;
flex-direction:row;
background: #C4C4C4;
background-blend-mode: darken;
border-radius: 0px 0px 23px 23px;
list-style:none;

@media(max-width:850px){
  display:none;
}
.compname{
    position: absolute;
width: 142px;
height: 17px;
left: 78px;
top: 21px;
font-family: 'Press Start 2P', cursive;

font-style: italic;
font-weight: bold;
font-size: 20px;
line-height: 30px;
text-transform: capitalize;

color: #000000;
:hover{
  color:white;
}
@media(max-width:1000px){
  position: absolute;
  width: 142px;
  height: 17px;
  left: 78px;
  top: 21px;
  font-family: 'Press Start 2P', cursive;
  
  font-style: italic;
  font-weight: bold;
  font-size: 2px;
  line-height: 30px;
  text-transform: capitalize;
  
  color: #000000;
}
@media(max-width:600px){
  position: absolute;
width: 142px;
height: 17px;
left: 78px;
top: 21px;
font-family: 'Press Start 2P', cursive;

font-style: italic;
font-weight: bold;
font-size: 2px;
line-height: 30px;
text-transform: capitalize;

color: #000000;
}
}
.home{
    position: absolute;
width: 142px;
height: 17px;
left: 378px;
top: 21px;
font-family: 'Press Start 2P', cursive;

font-style: italic;
font-weight: bold;
font-size: 20px;
line-height: 30px;
text-transform: capitalize;

color: #000000;
@media(max-width:1000px){
  position: absolute;
  width: 142px;
  height: 17px;
  left: 78px;
  top: 21px;
  font-family: 'Press Start 2P', cursive;
  
  font-style: italic;
  font-weight: bold;
  font-size: 2px;
  line-height: 30px;
  text-transform: capitalize;
  
  color: #000000;
}
@media(max-width:600px){
  position: absolute;
width: 142px;
height: 17px;
left: 78px;
top: 21px;
font-family: 'Press Start 2P', cursive;

font-style: italic;
font-weight: bold;
font-size: 2px;
line-height: 30px;
text-transform: capitalize;

color: #000000;
}
}
.about{
    position: absolute;
width: 142px;
height: 17px;
left: 528px;
top: 21px;
font-family: 'Press Start 2P', cursive;

font-style: italic;
font-weight: bold;
font-size: 20px;
line-height: 30px;
text-transform: capitalize;

color: #000000;
}
.heroimg{

}
@media(max-width:1000px){
  position: absolute;
width: 142px;
height: 17px;
left: 78px;
top: 21px;
font-family: 'Press Start 2P', cursive;

font-style: italic;
font-weight: bold;
font-size: 2px;
line-height: 30px;
text-transform: capitalize;

color: #000000;
}
@media(max-width:600px){
  position: absolute;
width: 142px;
height: 17px;
left: 78px;
top: 21px;
font-family: 'Press Start 2P', cursive;

font-style: italic;
font-weight: bold;
font-size: 2px;
line-height: 30px;
text-transform: capitalize;

color: #000000;
display:none;
}
`;
const Hero = styled.div`
position: absolute;
width: 1440px;
height: 610px;
left: 0px;
top: 0px;
background-repeat:no-repeat;

border-radius: 0px 0px 33px 33px;
`;