import React from 'react'
import styled from 'styled-components'
import { GrPrevious, GrNext } from 'react-icons/gr'

const Pagination = ({ charactersPerPage, allCharacters, pages, currentPage, setCurrentPage }) => {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(allCharacters / charactersPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <Row>
      <Page>
        <div class='pagination-wrap mt-30'>
          <div class='pagination-wrap mt-30'>
            <ul>
              {currentPage > 1
                ? <li><a onClick={prevPage}><GrPrevious /></a> </li>
                : null}
              {pageNumbers && pageNumbers.map(number => (
                <li key={number}><a key={number} onClick={() => pages(number)}>{number}</a></li>
              ))}
              {currentPage < Math.ceil(allCharacters / charactersPerPage)
                ? <li><a onClick={nextPage}><GrNext /></a></li>
                : null}
            </ul>
          </div>
        </div>
      </Page>
    </Row>

  )
}
const Row = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 2fr 1fr;
`
const Page = styled.div`
display: grid;
grid-column-start: 2;
grid-column-end: 4;
`
export default Pagination
