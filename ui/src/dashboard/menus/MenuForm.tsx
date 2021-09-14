// Render Prop
import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import { Field, Button } from 'components'
import { MenuCategoryForm } from './MenuCategoryForm'

export const MenuForm = ({ onSubmit, menu = null }) => {
  const initialItem = {
    id: '',
    name: '',
    description: '',
    price: '',
    notes: [],
    tags: [],
  }

  const initialCategory = {
    name: '',
    price: '',
    notes: [],
    items: [],
  }

  const initialValues = {
    title: menu?.title || '',
    description: menu?.description || '',
    bgImage: menu?.bgImage || '',
    logo: menu?.logo || '',
    categories: menu?.categories || [initialCategory],
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
        {({ isSubmitting, values }) => (
          <>
            <div className="card card--full-width card--lightestGray">
              <Form>
                <Field isFormik name="title" label="Title" />
                <ErrorMessage name="title" component="div" />
                <Field isFormik as="textarea" label="Description" name="description" />
                <ErrorMessage name="description" component="div" />
                <Button type="submit" disabled={isSubmitting}>
                  {menu ? 'Update' : 'Create'} Menu
                </Button>
              </Form>
            </div>
            <div className="margin-top-small">
              <MenuCategoryForm values={values} initialCategory={initialCategory} initialItem={initialItem} />
            </div>
          </>
        )}
      </Formik>
    </div>
  )
}
