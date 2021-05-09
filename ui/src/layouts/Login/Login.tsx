import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'
import { useAuth, Types } from 'global'

const ME = gql`
  query GetMe {
    me {
      displayName
      username
      isAdmin
    }
  }
`

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

export const Login = ({ closeAction = () => null }: Props) => {
  const history = useHistory()
  const { dispatch: authDispatch } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isCredsChecked, setIsCredsChecked] = useState(false)
  const [isRedirecting] = useState(false)

  const { data: credsOnServer } = useQuery(ME, {
    fetchPolicy: 'no-cache',
  })
  const [login, { data: loginData, loading: loginLoading, error: loginError }] = useMutation(LOGIN, {
    variables: {
      password,
      username,
    },
  })

  // Check if user is logged in
  useEffect(() => {
    if (!isCredsChecked && credsOnServer && credsOnServer.me && credsOnServer.me.displayName) {
      authDispatch({
        type: Types.Login,
        payload: {
          displayName: credsOnServer.me.displayName,
          username: credsOnServer.me.username,
          isAdmin: credsOnServer.me.isAdmin,
        },
      })
      setIsCredsChecked(true)
    }
  }, [credsOnServer, isCredsChecked, authDispatch])

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
      {isRedirecting ? (
        <Redirect to="/" push={true} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            login()
            history.push('/dashboard')
            closeAction()
          }}
        >
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
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
      )}
    </>
  )
}
