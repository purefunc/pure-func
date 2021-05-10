import React from 'react'
import styled from 'styled-components'

export function LanguageSelect() {
  return (
    <Select name="languages" id="">
      <option value="en">English</option>
      <option value="kr">Korean</option>
    </Select>
  )
}

const Select = styled.select`
  max-width: 120px;
`
