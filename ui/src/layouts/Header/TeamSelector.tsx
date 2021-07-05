import { useAuth } from 'global'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useLocalStorage } from 'hooks'

type Props = {
  teams: object
}
export function TeamSelector({ teams }: Props) {
  const history = useHistory()
  const [teamId, setTeamId] = useLocalStorage('team_id', teams[0]._id)

  const handleChange = (e) => {
    const value = e.target.value
    setTeamId(value)
    history.push(`/dashboard/teams/${value}/overview/`)
  }

  return (
    <select onChange={handleChange} style={{ maxWidth: '200px' }} defaultValue={teamId}>
      {teams.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </select>
  )
}
