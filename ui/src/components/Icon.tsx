import React from 'react'

type Props = {
  name: string
  color?: string
  onClick?: () => void
  style?: object
}

export function Icon({ color = 'var(--black)', name, onClick, style = {} }: Props) {
  switch (name) {
    case 'hamburger':
      return (
        <svg
          width="23"
          height="17"
          viewBox="0 0 23 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          onClick={onClick}
          aria-labelledby="hamburger-icon"
          className="icon"
        >
          <title>Hamburger Menu</title>
          <rect width="23" height="3" rx="1.5" fill={color} />
          <rect y="7" width="23" height="3" rx="1.5" fill={color} />
          <rect y="14" width="23" height="3" rx="1.5" fill={color} />
        </svg>
      )

    case 'close':
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          aria-labelledby="close-icon"
          className="icon"
        >
          <title>Close</title>
          <rect y="16.2634" width="23" height="3" rx="1.5" transform="rotate(-45 0 16.2634)" fill={color} />
          <rect x="2.12134" width="23" height="3" rx="1.5" transform="rotate(45 2.12134 0)" fill={color} />
        </svg>
      )
    case 'youtube':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={style} fill={color}>
          <path d="M38.4 55.5v-3.8H27.1c-.1 0 0 .1 0 .1v3.6c1.3 0 2.7-.1 3.8 0v20.5h3.7c0-6.8-.1-13.8 0-20.6 1.3.2 2.5.2 3.8.2zM44.5 69.7c0 .6.1 1.3 0 1.7-.1.5-1.4 1.5-2.1 1.4-1-.1-.7-2.1-.7-3.2V57.9h-3.2c-.1 0 0 .1 0 .1v13.3c0 1.6-.1 3.1.5 3.9 1.2 1.8 4 .3 4.9-.6.2-.2.4-.5.7-.6v1.9h3.3v-18h-3.3c-.1 3.8-.1 8.1-.1 11.8zM46.4 35.6c0 .8-.1 2.2.2 2.7.6.9 2.2.5 2.5-.3.3-.7.1-1.9.1-2.7v-5.6c0-1 .2-2.2-.1-2.7-.3-.6-1.1-.7-1.6-.6-1.4.2-1.1 2-1.1 3.5v5.7z" />
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm5.4 32.9v-9.2c1-.1 2.3-.1 3.3 0v6.9c0 2.4-.2 4.9 0 7 .2 1.2 1.1 1.1 1.9.5.3-.2.8-.6.9-.9.1-.4 0-1.2 0-1.7V23.8c1-.1 2.3-.1 3.3 0v17.7c-1 .1-2.3.1-3.3 0v-1.8c-.8.9-3.4 3.2-5.2 1.7-1.4-1.3-.9-5.9-.9-8.5zm-8.2-9.7c2.4-.2 4 .7 4.8 2.1.9 1.5.6 4.9.6 7.1s.2 5.7-.5 7.2c-1.1 2.1-4.6 3.1-6.9 1.6-1.2-.7-2-2.1-2.1-3.6-.2-1.6 0-3.5 0-5.3 0-2.7-.3-5.4.5-6.9.6-1.1 1.8-2 3.6-2.2zm-16.5-5.8c1.1-.1 2.5 0 3.7 0 .8 2.8 1.5 5.7 2.2 8.5.1.4.1.8.4 1.1.3-.3.3-.8.4-1.1.7-2.8 1.4-5.8 2.1-8.5h3.7c-1.1 4-2.5 8.2-3.7 12.3-.2.6-.5 1.2-.5 1.8-.1.8 0 1.7 0 2.5v7.5c-1.2 0-2.5.1-3.7 0v-4.7c0-1.6.2-3.2 0-4.7-.1-.6-.4-1.2-.5-1.8-1.5-4.4-2.7-8.8-4.1-12.9zM77 73.9c0 4.9-3.9 8.8-8.8 8.8H31.7c-4.9 0-8.8-3.9-8.8-8.8V55c0-4.9 3.9-8.8 8.8-8.8h36.5c4.9 0 8.8 3.9 8.8 8.8v18.9z" />
          <path d="M60.5 67.4c0-2.1.1-4.2 0-5.6-.1-1.5-.5-2.8-1.3-3.4-1.1-.9-2.8-.7-3.8 0-.4.3-.7.7-1.1.9v-7.6H51c-.1 0 0 .1 0 .1V76h3.3v-1.3c.9 1.1 2.9 2 4.6 1.2.9-.5 1.5-1.6 1.6-2.9.1-1.6 0-3.6 0-5.6zm-3.9 6c-.8.5-1.7-.2-2.2-.7v-8.2c0-.9-.2-2.1 0-2.7.2-.6 1.3-1.1 2.1-.6 1.1.6.6 4.4.6 6.1v3.4c0 1 .1 2.3-.5 2.7zM72.7 69.4h-3.4c-.1 1.3.3 3.2-.6 3.8-.3.2-1 .4-1.6.1-1.4-.6-.5-3.9-.8-5.7h6.3c-.1-2.5.2-4.9-.2-6.9-.5-2-2.2-3.3-4.8-3.2-2.4.1-4.3 1.8-4.6 3.9-.3 2.1-.1 5.3-.1 8.1 0 3 .3 5 2 6.2 1.4 1 4 1.1 5.7.1 1.8-1 2.2-3.2 2.1-6.4zm-6-8c.4-.6 1.5-.6 2.1-.2.8.6.5 2.2.6 3.4h-2.9c-.1-1.2-.3-2.5.2-3.2z" />
        </svg>
      )
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={style} fill={color}>
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm26.7 36.4c.3 9.1-2.3 16.4-5.7 22.1-3.3 5.6-7.8 10.1-13.2 13.3-5.4 3.3-12.6 5.7-21.1 5.4-7.9-.2-14.2-2.5-19.3-5.6-.3-.2-.7-.4-.9-.7 8.8 1 15.5-1.9 20.3-5.6-3.5-.1-6.2-1.3-8.2-3-2-1.6-3.7-3.8-4.6-6.6 1.8.4 4.4.3 6-.2-3.3-.7-5.7-2.5-7.6-4.7-1.9-2.1-3.2-5-3.2-9 .1-.2.4.1.6.2 1.5.7 3.4 1.3 5.5 1.4-3.4-2.4-6.8-7-5.8-13.5.3-1.9.9-3.5 1.7-4.9.9.9 1.7 1.9 2.6 2.8C30 34 38 38.5 49.6 39.4c-1.6-7.1 2.1-12.4 6.6-15 2.5-1.4 6-2.1 9.4-1.4 3.1.6 5.5 2.2 7.3 4 3.4-.6 6.1-1.9 8.7-3.3-1.2 3.3-3.1 5.9-6 7.5 2.8-.2 5.5-1.2 7.8-2.1-1.7 2.9-4.1 5.2-6.7 7.3z" />
        </svg>
      )
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={style} fill={color}>
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm7 36.9c3.5 0 7.2-.1 10.7.1-.1 3.7 0 7.6-.1 11.3H57v35H42v-35c-3.1-.1-6.4 0-9.6-.1V36.8h9.5c.1-3 0-5.7.2-8.1s1-4.4 2.1-6.1c2.2-3.2 5.8-5.8 10.7-6 4-.2 8.5.1 12.8.1 0 3.8.1 7.7-.1 11.4-2.1.1-4.3-.2-6.1 0-1.9.2-3.3 1.3-3.9 2.7-.9 1.7-.6 3.8-.6 6.1z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={style} fill={color}>
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zM36 75.3H25.5V41.7c0-.1 0-.2.1-.2h10.5C36 52.7 36 64 36 75.3zm-8.7-39.4c-1.6-1.1-2.9-3.4-2.6-6.1.3-2 1.7-3.7 3.2-4.5.5-.3 1.2-.5 2-.5 4-.5 7 2.3 7 6.1-.1 4.6-5.4 7.8-9.6 5zm48.1 39.4H64.9V63.2c0-5.1.7-11-2.8-12.8-1.7-.9-4-.6-5.5 0-3.8 1.7-3.5 7.1-3.5 13v11.9H42.6V41.5h10.1v4.6c.4-.3.5-.7.8-1.1 1.8-2.4 5-4.4 9.1-4.4 5.2 0 8.9 1.8 10.8 5.1 2 3.5 2 8.4 2 13.9v15.7z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={style} fill={color}>
          <path d="M50.1 58.4c4.1 0 7.8-3.4 8-7.6.3-5.6-4.5-9.1-9.3-8.5-3.5.5-6.1 2.9-6.8 6.4-1.1 5.5 3.6 9.7 8.1 9.7zM71.3 26.6H65c-.9 0-1.6.7-1.6 1.6v6.3c0 .9.7 1.6 1.6 1.6h6.3c.9 0 1.6-.7 1.6-1.6v-6.3c.1-.9-.7-1.6-1.6-1.6z" />
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm28.1 65.2c0 3.8-.7 6.7-2.7 9-1.8 2-4.2 3.7-7.6 4-5.6.4-11.6 0-17.6 0-5.7 0-11.8.4-17.6 0-5.7-.4-10.1-4.6-10.5-10.5-.6-7.8.4-17 0-25.4 0-.2.1-.4.3-.4h15.8c.5.3-.4 1-.7 1.5-1.1 2-1.9 5-1.6 8.3.4 6.6 6 12.3 13.1 12.8 5.2.4 9.4-2.1 12-5.3 2.4-2.9 4.4-8 2.6-13.4-.2-.7-.6-1.4-1-2-.3-.6-.8-1.2-.8-1.9h16.1c.3 8.2.2 15.7.2 23.3zM39 50.5c-.1-3.6 1.6-6.5 3.3-8.2s3.8-2.8 7.1-3c6.1-.4 11.1 3.9 11.7 9.5.6 6.2-3.7 11.7-9.3 12.4-1 .1-2.4.1-3.4 0-4.9-.5-9.3-5-9.4-10.7zm39.1-10.2H64.9c-1.4 0-3.1.3-4.4 0-.8-.2-1.2-1-1.9-1.5-2.2-1.6-5.6-3-9.8-2.7-3.1.2-5.2 1.3-7.2 2.9-.5.4-1.3 1.2-1.9 1.4-1.2.3-3 0-4.5 0H22.1c.2-3.3-.4-6.5.1-9.3.6-3.3 2.6-5.6 4.6-7v11.7H29s-.2-9 .1-13.1c.3-.3 1-.2 1.4-.5.3 4.2.3 13.6.3 13.6H33V22.3c0-.2 0-.4.1-.4h1.4v13.9h2.3V21.9c9.4.5 21.5-.6 30.7 0 3.6.2 6.6 2 8.3 4.2 2.5 3.2 2.4 7.9 2.3 14.2z" />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
