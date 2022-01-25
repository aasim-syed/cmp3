import React from 'react'
import Image from "next/image"
import styled from "styled-components"
import Heroimg from "../../public/hero.jpg"
import Particles from "react-tsparticles"
import ParticleConfig from "../config/particle-config"

const Hero = () => {
  return (
    <>
    
      <Heropic > 
        {/* <Image style={{transform:"scale(1.2)"}} src={Heroimg}></Image> */}
        <Particles params={ParticleConfig}></Particles>
        <h1 className='car' ><a href="https://github.com/aasim-syed/">Carrer.mp$</a></h1>
        <h1 className='adv'>Audio Based Carrer Advices.</h1>
        <h1 className='stay'>STAY TUNED..🙄😵‍💫</h1>
        </Heropic>
   
    
    
    

    </>
  )
}

export default Hero

const Heropic = styled.div`
position: relative;
right:0px;
height: 610px;
background-image: linear-gradient(to top, #0e100d, #111311, #141614, #171816, #191b19, #1d1f1d, #222422, #262826, #2d2f2d, #353735, #3c3e3c, #444644);
background-blend-mode: darken;
z-index:1;
left: 0px;
top:10vh;

background-repeat:no-repeat;

border-radius: 0px 0px 33px 33px;
@media(max-width:600px){
  top:0vh;
}

.car{
  position: absolute;
width: 731px;
height: 40px;
left: 194px;
top: 14px;
color:#36FC25;
font-family: 'Press Start 2P', cursive;
font-style: italic;
font-weight: 600;
font-size: 90px;
line-height: 135px;

mix-blend-mode: hard-light;

@media(max-width:1000px){

  position: absolute;
  width: 20px;
  height: 10px;
  left: 104px;
  top: 14px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 35px;
  line-height: 135px;
  
  mix-blend-mode: hard-light;
}
@media(max-width:700px){

  position: absolute;
  width: 20px;
  height: 10px;
  left: 104px;
  top: 14px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 25px;
  line-height: 135px;
  
  mix-blend-mode: hard-light;
}
@media(max-width:600px){

  position: absolute;
  width: 15px;
  height: 10px;
  left: 24px;
  top:14px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 32px;
  line-height: 135px;
  
  mix-blend-mode: hard-light;
}
:hover{
  color:white;
  }
}
.adv{
  position: absolute;
  width: 820px;
  height: 10px;
  left: 194px;
  top: 134px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 30px;
  line-height: 135px;
  
  mix-blend-mode: hard-light;
  @media(max-width:1000px){
    position: absolute;
    width: 760px;
    height: 10px;
    left: 104px;
    top: 164px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    
    mix-blend-mode: hard-light;
  }
  @media(max-width:600px){

    position: absolute;
    width: 20px;
    height: 10px;
    left: 44px;
    top: 144px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 25px;
    line-height: 55px;
    
    mix-blend-mode: hard-light;
  }
}
.stay{
  position: absolute;
  width: 900px;
  height: 10px;
  left: 194px;
  top: 224px;
  color:#36FC25;
  font-family: 'Press Start 2P', cursive;
  font-style: italic;
  font-weight: 600;
  font-size: 70px;
  line-height: 135px;
  
  mix-blend-mode: hard-light;
  @media(max-width:1000px){
    position: absolute;
    width: 530px;
    height: 10px;
    left: 104px;
    top: 364px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 45px;
    line-height: 65px;
    
    mix-blend-mode: hard-light;
  }
  @media(max-width:700px){
    position: absolute;
    width: 700px;
    height: 10px;
    left: 14px;
    top: 364px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 45px;
    line-height: 135px;
    
    mix-blend-mode: hard-light;
  }
  @media(max-width:600px){

    position: absolute;
    width: 110px;
    height: 10px;
    left: 44px;
    top: 404px;
    color:#36FC25;
    font-family: 'Press Start 2P', cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 25px;
    line-height: 55px;
    
    mix-blend-mode: hard-light;
  }
}
`;