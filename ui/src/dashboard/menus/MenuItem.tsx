import React, { Fragment } from 'react'
import styled from 'styled-components'

export function MenuItem({ item, isCentered = false }) {
  return (
    <ItemLi className="category-item" $isCentered={isCentered}>
      <div>
        <h5 className="item-name">
          {item.id && item.id + '.'} {item.name}
        </h5>
        {item.description && <p className="item-description">{item.description}</p>}
        {item.notes.length > 0 &&
          item.notes.map((note) => (
            <p key={note.description} className="item-note">
              *{note.description}
            </p>
          ))}
        {item.tags.length > 0 &&
          item.tags.map((tag) => (
            <Fragment key={tag.description}>
              <span className="tag-symbol">{tag.symbol}</span>
              {tag.description && <p className="tag-description">{tag.description}</p>}
            </Fragment>
          ))}
      </div>
      {item.price && <h5 className="item-price">${item.price}</h5>}
    </ItemLi>
  )
}

const ItemLi = styled.li`
  ${({ $isCentered }) =>
    !$isCentered &&
    `
      display: flex;
      justify-content: space-between;
    `};
  margin: 0px;
  .item-name {
    font-size: var(--itemNameSize);
  }
  .item-description {
    font-size: var(--itemDescriptionSize);
  }
  .item-note {
    font-size: var(--noteSize);
    margin: var(--menuSmallestSpace) 0;
    font-style: italic;
  }
  .item-price {
  }
  .tag-symbol {
    & + .tag-symbol {
      margin-left: var(--menuSpace);
    }
  }
  .tag-description {
  }
`
