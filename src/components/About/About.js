import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Principal>
      <Content>
        <Paragrafh><span>Rick and Morty</span> is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block, Adult Swim. The series follows the misadventures of cynical mad scientist <span>Rick Sanchez</span> and his good-hearted, but fretful grandson <span>Morty Smith</span>, who split their time between domestic life and interdimensional adventures.</Paragrafh>
        <Paragrafh>Project carried out for <span>Valienta</span> as a technical test for the position of Junior Front-end Developer. Thanks for the opportunity, I hope I can show a bit of my work with this. </Paragrafh>
      </Content>
    </Principal>
  )
}
const Principal = styled.div`
background-position: top center;
background-size: cover;
padding: 175px 0 120px;
background-image: url(/images/bg_about.png);
height: 120vh;
`
const Paragrafh = styled.p`
  font-size: 1.5rem;
  color: white;
  text-shadow: 3px 3px #251816;
  span {
    color: #fdc500; 
  }
`
const Content = styled.div`
margin-left: 40px; 
`
export default About
