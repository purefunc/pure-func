// Render Prop
import React from 'react'
import { Formik, Form } from 'formik'
import { Field, Button } from 'components'
import { MenuCategoryForm } from './MenuCategoryForm'
import { Dropzone } from 'components/Dropzone'

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
    tags: menu?.tags || '',
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
        {({ isSubmitting, values, setFieldValue }) => {
          console.log(values, 'values')
          return (
            <>
              <div className="card card--full-width card--lightestGray">
                <Form>
                  <div className="grid">
                    <div>
                      <p className="menu-header-text">Header Image</p>
                      <Dropzone name="bgImage" setFieldValue={setFieldValue} />
                    </div>
                    <div>
                      <Field isFormik name="title" label="Title" />
                      <Field isFormik as="textarea" label="Description" name="description" />
                      <Field
                        isFormik
                        as="textarea"
                        label="Disclaimer"
                        placeholder="Enter any disclaimer here"
                        name="disclaimer"
                      />
                    </div>
                  </div>
                  <div>
                    <p>Select Modifiers</p>
                  </div>
                  <div className="menu-btn">
                    <Button type="submit" disabled={isSubmitting}>
                      {menu ? 'Update' : 'Create'} Menu
                    </Button>
                  </div>
                </Form>
              </div>
              <div className="margin-top-small">
                <MenuCategoryForm
                  setFieldValue={setFieldValue}
                  values={values}
                  initialCategory={initialCategory}
                  initialItem={initialItem}
                />
              </div>
            </>
          )
        }}
      </Formik>
    </div>
  )
}
