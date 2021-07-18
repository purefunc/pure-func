import React from 'react'
import styled from 'styled-components'
import { Accordion } from 'components'
import { MenuItem } from './MenuItem'

export function MenuCategory({ category }) {
  // TODO: Get value of --isMenuCentered and pass as a 1 or 0 boolean to accordion & menuItem via isCentered prop
  const isCentered = false
  return (
    <CategoryLi className="category" key={category.name}>
      <Accordion
        title={category.name}
        caretColor="var(--menuLineColor)"
        titleSize="var(--categoryNameSize)"
        isCentered={isCentered}
      >
        <>
          {category.price && <h5 className="category-price">${category.price}</h5>}
          {category.notes.length > 0 &&
            category.notes.map((note) => (
              <p key={note.description} className="category-note">
                *{note.description}
              </p>
            ))}
          <ul>
            {category.items.map((item) => (
              <MenuItem item={item} key={item.name} isCentered={isCentered} />
            ))}
          </ul>
        </>
      </Accordion>
    </CategoryLi>
  )
}

const CategoryLi = styled.li`
  border: var(--menuLine);
  border-radius: var(--menuRadius);
  padding: var(--menuSpace);

  .category-price {
  }
  .category-note {
    font-size: var(--noteSize);
    margin: var(--menuSmallestSpace) 0;
    font-style: italic;
  }
`
