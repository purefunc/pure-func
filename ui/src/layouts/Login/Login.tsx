import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { useAuth, Types } from 'global'
import { Field } from 'components'
import { useLocalStorage } from 'hooks'

const LOGIN = gql`
  mutation CheckCreds($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        displayName
        username
        isAdmin
      }
      token
    }
  }
`

type Props = {
  closeAction?: () => void
}

export const LoginForm = ({ closeAction = () => null }: Props) => {
  const history = useHistory()
  const { dispatch: authDispatch } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [login, { data: loginData, loading: loginLoading, error: loginError }] = useMutation(LOGIN, {
    variables: {
      password,
      username,
    },
  })
  const teamId = useLocalStorage('team_id', '')
  // Authenticate from login
  useEffect(() => {
    if (loginData && loginData.login) {
      Cookies.set('token', loginData.login.token)
      authDispatch({
        type: Types.Login,
        payload: {
          displayName: loginData.login.user.displayName,
          username: loginData.login.user.username,
          isAdmin: loginData.login.user.isAdmin,
        },
      })
    }
  }, [loginData, authDispatch])

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          login()
          history.push(`/dashboard/teams/${teamId}/overview/`)
          closeAction()
        }}
      >
        <Field
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Field
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center margins">
          <button className="cta" type="submit">
            {loginLoading ? 'Loading...' : 'Login'}
          </button>
          {loginError && <span>{loginError.message}</span>}
        </div>
      </form>
    </>
  )
}
