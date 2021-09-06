import React from 'react'
import { Formik, Form, ErrorMessage, FieldArray } from 'formik'
import { Field, Button } from 'components'
import { MenuItemForm } from './MenuItemForm'

export function MenuCategoryForm({ values, initialCategory, initialItem }) {
  return (
    <FieldArray name="categories">
      {({ insert, remove, push }) => (
        <div>
          {values.categories.length > 0 &&
            values.categories.map((category, index) => (
              <div key={index} className="card card--full-width card--line margins">
                <Field
                  isFormik
                  name={`categories.${index}.name`}
                  placeholder="Appetizers"
                  type="text"
                  label="Category Name"
                />
                <ErrorMessage name={`categories.${index}.name`} component="div" className="field-error" />

                <Field isFormik name={`categories.${index}.price`} placeholder="$2.99" label="Category Price" />
                <ErrorMessage name={`categories.${index}.price`} component="div" className="field-error" />

                <MenuItemForm items={category.items} categoryIndex={index} initialItem={initialItem} />

                <Button type="button" size="small" onClick={() => remove(index)}>
                  X
                </Button>
              </div>
            ))}
          <div className="text-center margins">
            <Button type="button" color="outline" size="small" onClick={() => push(initialCategory)}>
              + Add Category
            </Button>
          </div>
        </div>
      )}
    </FieldArray>
  )
}
