import React from 'react'
import { MultiSelect } from 'react-multi-select-component'

const initialOptions = [
  { label: 'Hot', value: 'Hot' },
  { label: 'Med', value: 'Med' },
  { label: 'Mild', value: 'Mild' },
  { label: 'Vegan', value: 'Vegan' },
  { label: 'Vegetarian', value: 'Vegetarian' },
]

export function MultiSelectField({ options, setOptions }) {
  return <MultiSelect options={initialOptions} value={options} onChange={setOptions} labelledBy="Select" isCreatable />
}
