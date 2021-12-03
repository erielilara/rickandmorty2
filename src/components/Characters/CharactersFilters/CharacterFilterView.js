import React from 'react'
import styled from 'styled-components'
import SearchBar from '../../SearchBar/SearchBar'
const CharacterFilterView = ({ handlerFilterGenre, handlerFilterStatus }) => {
  return (
    <Row>
      <div class='col-lg-6'>
        <Title>
          <h2>Meet all Characters</h2>
        </Title>
      </div>
      <div>
        <SearchBar />
      </div>
      <div class='col-lg-6'>
        <Select>
          <div>
            <h2>Filter by Genre</h2>
            <form>
              <select onChange={e => handlerFilterGenre(e)}>
                <option value='All'>All</option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
                <option value='genderless'>Genderless</option>
                <option value='unknown'>Unknown</option>
              </select>
            </form>
          </div>
          <div>
            <h2>Filter by Status</h2>
            <form>
              <select onChange={e => handlerFilterStatus(e)}>
                <option value='All'>All</option>
                <option value='alive'>Alive</option>
                <option value='dead'>Dead</option>
                <option value='unknown'>Unknown</option>
              </select>
            </form>
          </div>
        </Select>
      </div>
    </Row>
  )
}
const Row = styled.div`
display: grid;
margin-top: 30px; 
margin-left: 30px;
grid-template-columns: 1fr 1fr 1fr;
`
const Title = styled.div`
font-size: 2rem;
h2{
  color: #fdc500; 
  text-shadow: 2px 2px #251816;
}
`
const Select = styled.div`
    display: flex;
    margin-left: 70px;
    jutify-content:space-evenly; 
    h2{
      font-size: 1rem;
      text-shadow: 2px 2px #251816;
    }
      form select{
        border-radius: 50px;
    background: #20212b;
    font-size: 12px;
    font-weight: 600;
    color: #e3dfdf;
    border: 2px solid #2d303d;
    padding: 11px 27px;
    margin-bottom: 0;
    transition: none;
    }

`
export default CharacterFilterView
