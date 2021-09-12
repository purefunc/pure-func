import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function MenuCard({ menu }) {
  return (
    <CardWrapper className="card card--line card--full-width">
      <h4>{menu.title}</h4>
      <p>{menu.description}</p>
      <Link className="cta" to={`/menu/${menu._id}`} target="_blank">
        View
      </Link>
      <Link className="cta" to={`/dashboard/menus/${menu._id}/preview`}>
        Preview
      </Link>
      <Link className="cta" to={`/dashboard/menus/${menu._id}/edit`}>
        Edit
      </Link>
    </CardWrapper>
  )
}

const CardWrapper = styled.div``
