import React from 'react'
import styled from 'styled-components'
import { Icon } from 'components'

const basePath = 'https://res.cloudinary.com/level-up-tutorials/image'
const baseSize = 'f_auto,g_face,c_thumb,z_0.5'
const cloudPath = `${basePath}/upload/${baseSize}`

export function Avatar({ photoSrc = null, userPhotoId = null, size = 25, style = {} }: Props) {
  const src = photoSrc || `${cloudPath},w_${size},h_${size}/${userPhotoId}`

  return (
    <AvatarContainer data-testid="avatar-container" data-component="avatar" size={size} style={style}>
      {photoSrc || userPhotoId ? (
        <img data-testid="avatar-image" loading="lazy" src={src} alt="User photo avatar" />
      ) : (
        <Icon name="user" color="white" />
      )}
    </AvatarContainer>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
type Props = {
  photoSrc?: string | null
  userPhotoId?: string | null | undefined
  size?: number
  style?: {}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const AvatarContainer = styled.div<{ size?: number }>`
  ${({ size }) => `--size: ${size}px;`};
  min-width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  position: relative;
  background: var(--primaryColor);
  

  svg {
    width: 100%;
    height: auto;
    padding: 10%;
  }
`
