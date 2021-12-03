
import React from 'react'
import Pagination from '../Pagination'
import CharactersArea from './CharactersArea/CharactersArea'
import styled from 'styled-components'
import CharactersFilter from './CharactersFilters/CharactersFilter'
const CharactersView = ({ characters, charactersPerPage, allCharacters, pages, handlerFilterGenre, handlerFilterStatus, currentPage, setCurrentPage }) => {
  return (
    <>
      <BgImage>
        <Row>
          <div class='col-12'>
            <Content>
              <h2 class='title'> <span>Characters</span></h2>
            </Content>
          </div>

        </Row>
      </BgImage>
      <CharactersFilter
        handlerFilterStatus={handlerFilterStatus}
        handlerFilterGenre={handlerFilterGenre}
      />
      <CharactersArea
        characters={characters}
      />
      <Pagination
        charactersPerPage={charactersPerPage}
        allCharacters={allCharacters.length}
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}
const BgImage = styled.div`
padding: 230px 0 170px;
background-image: url(/images/bg_characters.png);
margin-top: 100px;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
height: 70vh;
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

export default CharactersView
