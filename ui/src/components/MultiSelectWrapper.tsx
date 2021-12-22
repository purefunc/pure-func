import React from 'react'
import { MultiSelectField } from './MultiSelectField'
import styled, { css } from 'styled-components'

const tags = css`
background-color: blue;
`

const notes = css`

`

   const baseSelectStyle = css`

`

export function MultiSelectWrapper() {



    const MultiWrapper = styled.div<{
        style?: string
      }>`
        ${baseSelectStyle};
        ${({ style }) => {
          if (style === 'tags') return tags
          if (style === 'notes') return notes
        }};
      `
      

    return (
        <MultiWrapper>
           <MultiSelectField /> 
        </MultiWrapper>
    )
}
