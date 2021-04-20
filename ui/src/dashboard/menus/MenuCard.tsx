import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function MenuCard() {
  const id = '123'
  return (
    <CardWrapper className="card card--line card--full-width">
      Menu Card
      <Link className="cta" to={`/dashboard/menus/${id}`}>
        View
      </Link>
    </CardWrapper>
  )
}

const CardWrapper = styled.div``
