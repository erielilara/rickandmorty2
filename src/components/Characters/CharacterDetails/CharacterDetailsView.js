import React from 'react'
import { BsPeople } from 'react-icons/bs'
import { RiAliensFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { FaFileMedicalAlt } from 'react-icons/fa'
import { BiPlanet } from 'react-icons/bi'
import { AiOutlinePlaySquare } from 'react-icons/ai'

import styled from 'styled-components'

const CharacterDetailsView = () => {
  const characterDetail = useSelector(state => state.details)
  if (characterDetail.length !== 0) {
    return (
      <div>
        <Principal>
          <Container>
            <Image>
              <img src={characterDetail.image} alt={characterDetail.name} />
            </Image>
            <Content>
              <h5><RiAliensFill /> {characterDetail.species}</h5>
              <h2><span>{characterDetail.name}</span></h2>
              <Details>
                <ul>
                  <li>
                    <span><BsPeople /></span><span> Gender: {characterDetail.gender} </span>
                  </li>
                  <li>
                    <span><BiPlanet /></span><span>Location: {characterDetail.location.name}</span>
                  </li>
                  <li>
                    <span><FaFileMedicalAlt /></span><span> Status: {characterDetail.status}</span>
                  </li>
                </ul>
              </Details>
            </Content>
          </Container>
        </Principal>
        <hr style={{ weight: '100%' }} />
        <Container2>
          <Wrapper>
            <Title>Episodes where this character appear: </Title>
            <Episodes>
              {characterDetail.episode.map(episodes => {
                return (
                  <ul key={episodes}>
                    <li><a href={episodes}> <AiOutlinePlaySquare /> Episode - {episodes} </a></li>
                  </ul>
                )
              })}

            </Episodes>

          </Wrapper>
        </Container2>
      </div>

    )
  }
  return (
    <div><h1>Loading... </h1></div>
  )
}

const Principal = styled.div`
background-position: top center;
background-size: cover;
padding: 175px 0 120px;
background-image: url(/images/bg_detail.jpg);
height: 120vh;
`
const Container = styled.div`
align-items: center;
justify-content: center;
display: grid;
grid-template-columns: 3fr 2fr;

@media (max-width: 768px) {
  grid-template-columns: 1fr;
`
const Image = styled.div`
  display: flex;
  padding-left: 100px; 
  align-items: center;
  img {
    width: 45%;
    border-radius: 10px; 
    border: 5px solid #fdc500;
  }`

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
max-width: 940px
`
const Content = styled.div`
h5 {
  font-size: 2rem;
}
h2 {font-size: 4rem;
  font-weight: 700;
  margin-bottom: 30px;
color: #fdc500;
}
`
const Details = styled.div`
ul {
  list-style: none;
  font-size: 1.5rem;
  li {
    display: flex;
    margin-bottom: 20px;
    span {
      margin-left: 20px;
      font-weight: 800;
    }
  }
}
`
const Container2 = styled.div`
background-position: top center;
background-size: cover;
padding: 30px;
background-image: url(/images/bg_detail2.png);
height: 100%;
`
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-shadow: 2px 2px black;`

const Episodes = styled.div`
ul{
  li{
    font-size: 1rem;
    border: 1px solid #fdc500;
    background-color: black;
    padding: 10px;
  }
}
`

export default CharacterDetailsView
