import React, { useState } from 'react'
import './forms.scss'

export function ContactForm() {
  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const [state, setState] = useState({})
  const [error, setError] = useState('')
  const [isThankYouShowing, setIsThankYouShowing] = useState(false)
  const options = [
    {
      label: 'Consultation',
      value: 'consultation',
    },
    {
      label: 'Digital Menus',
      value: 'digital menus',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ]

  const handleChange = (e) => {
    if (error) {
      setError('')
    }
    setState({ ...state, [e.target.name]: e.target.value })
    console.log(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then((result) => {
        console.log('result', result)
        setIsThankYouShowing(true)
      })
      .catch((e) => {
        console.log('e', e)
        setError('Form could not be submitted. Please try again later.')
      })
  }
  return (
    <div className="card card--lightBlue contact-form">
      {isThankYouShowing ? (
        <h3>Thank you. We will get back to you shortly.</h3>
      ) : (
        <>
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="margins"
          >
            <label htmlFor="name">
              <span> Name*</span>
              <input type="text" name="name" required onChange={handleChange} />
            </label>
            <label htmlFor="email">
              Email*
              <input type="email" name="email" required onChange={handleChange} />
            </label>
            <label htmlFor="category">
              Area(s) of Interest*
              <select onChange={handleChange} name="category">
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <label htmlFor="message">
              Message*
              <textarea name="message" required onChange={handleChange}></textarea>
            </label>
            {error && <p className="red-text small">{error}</p>}
            <div className="text-center">
              <button type="submit" className="cta cta--gradient">
                Send
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}
