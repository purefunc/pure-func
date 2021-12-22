import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Dropdown } from 'components'

const Selector = styled.div`
  font-size: var(--h5);
`

type Props = {
  teams: object
  teamId: string
  setTeamId: (_: string) => void
}
export function TeamSelector({ teams, teamId, setTeamId }: Props) {
  const history = useHistory()

  const handleChange = async (newId) => {
    await setTeamId(newId)
    history.push(`/dashboard/teams/${newId}/menus/`)
  }

  const currentTeamName = teams.find(({ _id }) => _id === teamId).name || ''

  return (
    <>
      {teams.length > 1 ? (
        <Dropdown
          menuIcon={
            <Selector>
              {currentTeamName}{' '}
              <svg height="12" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 4l3.4 3.4c.3.4.9.4 1.2 0L11.9 4 14 6.2l-5.4 5.6c-.3.3-.9.3-1.2 0L2 6.2z"></path>
              </svg>
            </Selector>
          }
          renderMenuItems={(toggle) => (
            <ul>
              {teams.map(({ _id, name }) => (
                <li key={_id} value={_id}>
                  <button
                    onClick={() => {
                      handleChange(_id)
                      toggle()
                    }}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        />
      ) : (
        <h5 className="margin-bottom-smallest margin-top-0">{currentTeamName}</h5>
      )}
    </>
  )
}
