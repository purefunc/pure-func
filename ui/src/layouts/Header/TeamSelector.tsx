import React from 'react'
import { useHistory } from 'react-router-dom'

export function TeamSelector() {
  let history = useHistory()

  const handleChange = (e) => {
    const value = e.target.value
    history.push(`/dashboard/teams/${value}/overview/`)
  }

  const options = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
    { value: 3, label: 'three' },
  ]

  return (
    <select onChange={handleChange} style={{ maxWidth: '200px' }}>
      {options.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
