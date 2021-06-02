import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { useAuth, Types } from 'global'

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
          history.push('/dashboard')
          closeAction()
        }}
      >
        <h5>User Name</h5>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
          <h5>Password</h5>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="cta" type="submit">
          {loginLoading ? 'Loading...' : 'Login'}
        </button>
        {loginError && <span>{loginError.message}</span>}
      </form>
    </>
  )
}
