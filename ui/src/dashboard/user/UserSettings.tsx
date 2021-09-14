import React from 'react'
import { useMutation, gql } from '@apollo/client'
import { Formik, Form, ErrorMessage } from 'formik'
import { SEO } from 'utilities'
import { DashboardLayout, Field, Button } from 'components'
import { useAuth } from 'global'

const UPDATE_USER = gql`
  mutation updateUser($user: UserInput!) {
    updateUser(user: $user) {
      username
      displayName
      email
    }
  }
`

export function UserSettings() {
  const { state: user } = useAuth()
  const [updateUser] = useMutation(UPDATE_USER)
  const title = 'User Settings'

  const initialValues = {
    username: user?.username || '',
    displayName: user?.displayName || '',
    email: user?.email || '',
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
              updateUser({
                variables: { user: data },
              }).catch((e) => {
                console.error(e)
              })
            }}
          >
            {({ isSubmitting, dirty }) => (
              <Form>
                <Field isFormik name="username" label="Name" />
                <ErrorMessage name="username" component="div" />
                <Field isFormik name="displayName" label="Display Name" />
                <ErrorMessage name="displayName" component="div" />
                <Field isFormik name="email" type="email" label="E-mail" />
                <ErrorMessage name="email" component="div" />
                <Button type="submit" disabled={isSubmitting || !dirty}>
                  Update Settings
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </DashboardLayout>
    </>
  )
}
