import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaFileMedicalAlt } from 'react-icons/fa'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineFieldNumber } from 'react-icons/ai'

const CharactersArea = ({ characters }) => {
  return (
    <>
      <Container>
        {characters.map(character => {
          return (
            <div key={character.id} class='movie-item movie-item-three mb-50'>
              <div class='movie-poster'>
                <img src={character.image} alt={character.name} />
                <div>
                  <ul class='overlay-btn'>
                    <li><NavLink to={`/details/${character.id}`} className='btn'>Details</NavLink>
                    </li>
                  </ul>
                </div>
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
}
`
const Data = styled.div`
ul li {
  display: flex;
  justify-content: space-around;
}`
export default CharactersArea
