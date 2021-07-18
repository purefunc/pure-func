import React from 'react'
import styled from 'styled-components'
import { Accordion } from 'components'
import { MenuItem } from './MenuItem'

export function MenuCategory({ category }) {
  return (
    <CategoryLi className="category" key={category.name}>
      <Accordion title={category.name}>
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
              <MenuItem item={item} key={item.name} />
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
  font-family: var(--menuFontFamily);

  .category-name {
  }
  .category-price {
  }
  .category-note {
  }
`
