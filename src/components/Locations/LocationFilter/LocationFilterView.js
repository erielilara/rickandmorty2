import React from 'react'
import styled from 'styled-components'

const LocationFilterView = ({ handlerFilterType }) => {
  return (
    <Row>
      <div class='col-lg-6'>
        <Title>
          <h2>Meet all Locations</h2>
        </Title>
      </div>
      <div class='col-lg-6'>
        <Select>
          <div>
            <h2>Filter by Type</h2>
            <form>
              <select onChange={e => handlerFilterType(e)}>
                <option value='All'>All</option>
                <option value='Cluster'>Cluster</option>
                <option value='Microverse'>Microverse</option>
                <option value='TV'>TV</option>
                <option value='Resort'>Resort</option>
                <option value='Planet'>Planet</option>
                <option value='Dimension'>Dimension</option>
                <option value='Menagerie'>Menagerie</option>
                <option value='Space station'>Space station</option>
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
  grid-template-columns: 1fr 1fr;
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

export default LocationFilterView
