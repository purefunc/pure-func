import React from 'react'
import { useHistory } from 'react-router-dom'

type Props = {
  teams: object
}
export function TeamSelector({ teams }: Props) {
  let history = useHistory()

  const handleChange = (e) => {
    const value = e.target.value
    history.push(`/dashboard/teams/${value}/overview/`)
  }

  return (
    <select onChange={handleChange} style={{ maxWidth: '200px' }}>
      {teams.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </select>
  )
}
