// Render Prop
import React from 'react'
import { Formik, Form } from 'formik'
import { Field, Button } from 'components'
import { MenuCategoryForm } from './MenuCategoryForm'
import { Dropzone } from 'components/Dropzone'
import styled from 'styled-components'

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
      <MenuFormStyle>
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
                    <div className="grid-container grid">
                      <div className="left">
                        <p className="menu-header-text">Header Image</p>
                        <Dropzone name="bgImage" setFieldValue={setFieldValue} />
                      </div>
                      <div className="right">
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
      </MenuFormStyle>
    </div>
  )
}

const MenuFormStyle = styled.div`
  .menu-btn {
    margin: var(--headingMargins);
    text-align: center;
  }

  .left {
    text-align: center;
  }

  .menu-header-text {
    text-align: center;
  }
`
