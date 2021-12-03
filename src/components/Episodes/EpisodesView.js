import React from 'react'
import styled from 'styled-components'
import Pagination from '../Pagination'
import FilterEpisodes from './FilterEpisodes/FilterEpisodes'

const EpisodesView = ({ allEpisodes, episodesPerPage, pages, currentPage, setCurrentPage, episodes, handlerFilterSeason }) => {
  return (
    <>
      <Container>
        <Row>
          <div class='col-12'>
            <Content>
              <h2 class='title'> <span>Episodes</span></h2>
            </Content>
          </div>
        </Row>
      </Container>
      <FilterEpisodes
        handlerFilterSeason={handlerFilterSeason}
      />
      <div>
        <Card>
          <ul>
            {episodes.map(episode => {
              return (
                <li key={episode.id}>
                  <div>
                    <h5>{episode.name}</h5>
                    <span>Air Date: {episode.air_date}</span>
                  </div>
                  <div>
                    <div><span>Episode:{episode.episode} </span></div>
                    <div><span>Characters:({episode.characters.length})</span></div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Card>
      </div>
      <Pagination
        charactersPerPage={episodesPerPage}
        allCharacters={allEpisodes.length}
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

const Container = styled.div`
background-position: top center;
background-size: cover;
padding: 175px 0 120px;
background-repeat: repeat-y;
background-image: url(/images/bg_episode.jpg);
height: 100%;

@media (max-width: 768px) {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
`
const Card = styled.div`
ul {
display: grid; 
grid-template-columns: repeat(3, minmax(0, 1fr)); 
grid-gap: 20px;
gap: 20px;
padding: 20px;



li {
  display: grid; 
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 30px;
  background: #1f1e24;
  margin-bottom: 20px;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.46);
  border-radius: 5px;
  font-size: 1rem;
  h5 {
    color: #fdc500; 
  }
}
@media (max-width: 768px) {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
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
export default EpisodesView
