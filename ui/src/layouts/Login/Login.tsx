import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { useAuth, Types } from 'global'
import { Field, Button } from 'components'

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
          <Button type="submit">{loginLoading ? 'Loading...' : 'Login'}</Button>
          {loginError && <p className="small text-danger">{loginError.message}</p>}
        </div>
      </form>
    </>
  )
}
