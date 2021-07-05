// Render Prop
import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import { Field } from 'components'

export const MenuForm = ({ onSubmit, menu = null }) => {
  const initialValues = {
    title: menu?.title || '',
    description: menu?.description || '',
    bgImage: menu?.bgImage || '',
    logo: menu?.logo || '',
    categories: menu?.categories || [],
  }

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
        onSubmit={onSubmit}
      >
        {({ isSubmitting, dirty }) => (
          <Form>
            <Field isFormik name="title" label="Title" />
            <ErrorMessage name="title" component="div" />
            <Field isFormik as="textarea" label="Description" name="description" />
            <ErrorMessage name="description" component="div" />
            <button className="cta" type="submit" disabled={isSubmitting || !dirty}>
              {menu ? 'Update' : 'Create'} Menu
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
