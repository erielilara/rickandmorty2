import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
const SearchBarView = ({ handleOnChange, handleOnSubmit, input }) => {
  return (
    <div>
      <StyleInput name='name' type='text' placeholder='Search...' onChange={e => handleOnChange(e)} value={input.name} />
      <StyleButton type='submit' onClick={e => handleOnSubmit(e)}><BsSearch /></StyleButton>
    </div>

  )
}

const StyleInput = styled.input`
border-radius: 50px;
background: #20212b;
font-size: 12px;
font-weight: 600;
color: #e3dfdf;
border: 2px solid #2d303d;
padding: 11px 27px;
margin-bottom: 0;
transition: none;
cursor: pointer
`
const StyleButton = styled.button`
background-color: #20212b;
  border: 2px solid #fdc500; 
  border-radius: 10px;
  color: white;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 4px 2px;
  cursor: pointer;
`
export default SearchBarView
