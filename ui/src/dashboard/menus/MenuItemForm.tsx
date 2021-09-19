import React from 'react'
import { FieldArray } from 'formik'
import { Field, Button } from 'components'

export function MenuItemForm({ items, categoryIndex, initialItem }) {
  return (
    <FieldArray name={`categories.${categoryIndex}.items`}>
      {({ insert, remove, push }) => (
        <div>
          {items.length > 0 &&
            items.map((item, index) => (
              <div key={index} className="card card--full-width card--line margins">
                <Field
                  isFormik
                  name={`categories.${categoryIndex}.items.${index}.name`}
                  placeholder="Shrimp Poppers"
                  type="text"
                  label="Menu Item Name"
                />
                <Field
                  isFormik
                  as="textarea"
                  name={`categories.${categoryIndex}.items.${index}.description`}
                  placeholder="This is a great starter before your meal."
                  type="text"
                  label="Menu Item Description"
                />
                <Field
                  isFormik
                  name={`categories.${categoryIndex}.items.${index}.price`}
                  placeholder="$2.99"
                  label="Menu Item Price"
                />
                <Button type="button" size="small" onClick={() => remove(index)}>
                  X
                </Button>
              </div>
            ))}
          <div className="text-center margins">
            <Button type="button" color="outline" size="small" onClick={() => push(initialItem)}>
              + Add Item
            </Button>
          </div>
        </div>
      )}
    </FieldArray>
  )
}
