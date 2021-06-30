// Render Prop
import React from 'react'
import { Formik, Form, ErrorMessage, FieldArray } from 'formik'
import { useMutation, gql } from '@apollo/client'
import { Field } from 'components'

const CREATE_MENU = gql`
  mutation createMenu($menu: MenuInput!) {
    createMenu(menu: $menu) {
      title
      description
      logo
      bgImage
    }
  }
`

// TODO Refactor to graphql-codegen
type MenuInput = {
  title: string
  description: string
  logo: string
  bgImage: string
}

export const MenuForm = () => {
  const initialValues = {
    title: '',
    description: '',
    bgImage: '',
    logo: '',
    categories: [],
  }
  const [createMenu] = useMutation(CREATE_MENU, {
    refetchQueries: ['menus'],
  })

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validate={(values) => {
        //   const errors = {}
        //   if (!values.email) {
        //     errors.email = 'Required'
        //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //     errors.email = 'Invalid email address'
        //   }
        //   return errors
        // }}
        onSubmit={(data: MenuInput) => {
          console.log('data', data)
          createMenu({
            variables: { menu: data },
          }).catch((e) => {
            console.error(e)
          })
        }}
      >
        {({ isSubmitting, dirty }) => (
          <Form>
            <Field isFormik name="title" label="Title" />
            <ErrorMessage name="title" component="div" />
            <Field isFormik as="textarea" label="Description" name="description" />
            <ErrorMessage name="description" component="div" />
            <button className="cta" type="submit" disabled={isSubmitting || !dirty}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
