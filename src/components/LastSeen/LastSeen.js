import React from 'react'
import { useSelector } from 'react-redux'
import { FaFileMedicalAlt } from 'react-icons/fa'
import { BsPeople } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineFieldNumber } from 'react-icons/ai'

const LastSeen = () => {
  const lastSeen = useSelector(state => state.lastSeen)
  return (
    <>
      <BgImage>
        <Row>

          <div class='col-12'>
            <Content>
              <h2 class='title'> <span>Last seen</span></h2>
            </Content>
          </div>

        </Row>
      </BgImage>
      <Container>
        {lastSeen.map(character => {
          return (
            <div key={character.id} class='movie-item movie-item-three mb-50'>
              <div class='movie-poster'>
                <img src={character.image} alt={character.name} />
                <ul class='overlay-btn'>
                  <li><NavLink to={`/details/${character.id}`} className='btn'>Details</NavLink>
                  </li>
                </ul>
              </div>
              <div class='movie-content'>
                <div class='top'>
                  <h5 class='title'>{character.name}</h5>
                  <span class='date'>{character.species}</span>
                </div>
                <Data>
                  <ul>
                    <li>
                      <span><AiOutlineFieldNumber /> {character.id}</span>
                      <span><FaFileMedicalAlt /> {character.status}</span>
                      <span><BsPeople /> {character.gender}</span>
                    </li>
                  </ul>
                </Data>
              </div>
            </div>
          )
        })}
      </Container>
    </>
  )
}

const Container = styled.div`
margin: 30px;
padding: 30px 0px 26px; 
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));

@media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}`

const Data = styled.div`
ul li {
  display: flex;
  justify-content: space-around;
}`

const BgImage = styled.div`
background-position: top center;
background-size: cover;
padding: 175px 0 120px;
background-image: url(/images/bg_last.jpg);
height: 100%;

`
const Row = styled.div`
`
const Content = styled.div`
text-align: center;
h2{
    font-size: 60px;
    line-height: 1.3;
    margin-bottom: 8px;
    color: #fdc500;
    text-shadow: 3px 3px #251816;
}
`
export default LastSeen
