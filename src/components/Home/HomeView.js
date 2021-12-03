import React from 'react'
// import Slider from 'react-slick'
import styled from 'styled-components'
// import ImgSlider from './ImgSlider'
// import Viewers from './Viewers'
import { BsFillPlayFill } from 'react-icons/bs'
export const HomeView = () => {
  return (
    <BgImage>
      <Title>
        <Row>
          <BannerContent>
            <h6>Characters of</h6>
            <h2>Rick <span>and</span> Morty</h2>
            <a href='https://www.youtube.com/watch?v=9WGSdzhsxjU'><BsFillPlayFill /> WATCH NOW</a>
          </BannerContent>
        </Row>
      </Title>
    </BgImage>
  )
}

const BgImage = styled.div`
background-image: url(/images/bg_home.png);
margin-top: 100px;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
height: 90vh;

`
const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  `
const Row = styled.div`
  display: grid;
  grid-row-start: 2;
  grid-row-end: 3;
`
const BannerContent = styled.div`
h6 {
  font-size: 250%;
  color: #430b7a;
  text-shadow: 2px 2px #251816; 
   }
h2 {
      font-size: 370%;
      color: #00509d; 
      text-shadow: 2px 2px #251816;
      span {
        color: #430b7a;
      }
    }
  a {
      font-size: 100%;
      background-color: black;
      border-radius: 10px;
      border: 2px solid #fdc500;
      width: 3vw;
      padding: 10px;
      margin: 5%; 
    }
    a : hover {
    background-color: #fdc500;
      color: black;
    }
   }`
export default HomeView
