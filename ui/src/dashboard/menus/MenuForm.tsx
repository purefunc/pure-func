// Render Prop
import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { Field, Button } from 'components'
import { MenuCategoryForm } from './MenuCategoryForm'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

export const MenuForm = ({ onSubmit, menu = null }) => {
  function Previews(props) {
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }),
          ),
        )
      },
    })

    const thumbs = files.map((file) => (
      <div key={file.name}>
        <div>
          <img src={file.preview} />
        </div>
      </div>
    ))

    useEffect(
      () => () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview))
      },
      [files],
    )

    return (
      <section className="container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Upload avatar image here</p>
          <div className="placeholder">
            <div className="thumbs">{thumbs}</div>
          </div>
        </div>
      </section>
    )
  }

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
          {({ isSubmitting, values }) => (
            <>
              <div className="card card--full-width card--lightestGray">
                <Form>
                  <div className="grid-container grid">
                    <div className="left">
                      <Previews />
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
                <MenuCategoryForm values={values} initialCategory={initialCategory} initialItem={initialItem} />
              </div>
            </>
          )}
        </Formik>
      </MenuFormStyle>
    </div>
  )
}

const MenuFormStyle = styled.div`
  .container {
    text-align: center;

    .dropzone {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      border-radius: 50%;
    }

    .placeholder {
      background-color: var(--darkGray);
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
  }

  .menu-btn {
    margin: var(--headingMargins);
    text-align: center;
  }
`
