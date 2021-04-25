import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function SiteCard() {
  const id = '123'
  return (
    <CardWrapper className="card card--line card--full-width">
      Site Card
      <Link className="cta" to={`/dashboard/menus/${id}`}>
        View
      </Link>
      <Link className="cta" to={`/dashboard/menus/edit/${id}`}>
        Edit
      </Link>
    </CardWrapper>
  )
}

const CardWrapper = styled.div``
