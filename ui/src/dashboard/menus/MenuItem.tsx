import React, { Fragment } from 'react'
import styled from 'styled-components'

export function MenuItem({ item }) {
  return (
    <ItemLi className="category-item">
      <div>
        <h5 className="item-name">
          {item.id && item.id + '.'} {item.name}
        </h5>
        {item.description && <p className="item-description">{item.description}</p>}
      </div>
      {item.notes.length > 0 &&
        item.notes.map((note) => (
          <p key={note.description} className="item-note">
            *{note.description}
          </p>
        ))}
      {item.tags.length > 0 &&
        item.tags.map((tag) => (
          <Fragment key={tag.description}>
            <p className="tag-symbol">
              {tag.symbol} {tag.name}
            </p>
            {tag.description && <p className="tag-description">{tag.description}</p>}
          </Fragment>
        ))}
      {item.price && <h5 className="item-price">${item.price}</h5>}
    </ItemLi>
  )
}

const ItemLi = styled.li`
  .item-name {
  }
  .item-description {
  }
  .item-note {
  }
  .item-price {
  }
  .tag-symbol {
  }
  .tag-description {
  }
`
