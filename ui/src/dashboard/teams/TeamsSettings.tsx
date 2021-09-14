import React from 'react'
import { useMutation, useQuery, gql } from '@apollo/client'
import { Formik, Form, ErrorMessage } from 'formik'
import { SEO } from 'utilities'
import { useParams, Link } from 'react-router-dom'
import { DashboardLayout, Field, Button } from 'components'
import { TeamsMembers } from '.'

const UPDATE_TEAM = gql`
  mutation updateTeam($team: UserInput!) {
    updateTeam(team: $team) {
      name
    }
  }
`

const GET_TEAM = gql`
  query team($_id: ID!) {
    team(_id: $_id) {
      name
      users {
        _id
        displayName
        email
        isAdmin
      }
    }
  }
`

export function TeamsSettings() {
  const { id } = useParams()
  const [updateTeam] = useMutation(UPDATE_TEAM)
  const { data } = useQuery(GET_TEAM, { variables: { _id: id } })

  if (!data) return null
  const { team } = data

  const title = 'Team Settings'

  const initialValues = {
    name: team?.name || '',
  }
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <div className="card card--full-width card--lightestGray">
          <Formik
            initialValues={initialValues}
            onSubmit={(data) => {
              console.log('data', data)
              updateTeam({
                variables: { team: data },
              }).catch((e) => {
                console.error(e)
              })
            }}
          >
            {({ isSubmitting, dirty }) => (
              <Form>
                <Field isFormik name="name" label="Team Name" />
                <ErrorMessage name="name" component="div" />
                <Button type="submit" disabled={isSubmitting || !dirty}>
                  Update Settings
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </DashboardLayout>
      <DashboardLayout title="Team Members">
        <div className="card card--full-width card--lightestGray">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>E-mail</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {team.users.map(({ _id, email, displayName, isAdmin }) => (
                <tr key={_id}>
                  <td>{displayName}</td>
                  <td>({email})</td>
                  {isAdmin && (
                    <td>
                      <strong>Admin</strong>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </>
  )
}
