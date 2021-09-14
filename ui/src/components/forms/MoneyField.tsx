import CurrencyInput from 'react-currency-input-field'
import styled from 'styled-components'
import React from 'react'

const FieldWrapper = styled.div`
  max-width: 600px;
  .instructions {
    font-size: 0.7rem;
    opacity: 0.7;
    margin-left: 1rem;
  }

  label.form-label {
    p,
    span {
      margin-bottom: 0;
    }
  }

  input.form-input {
    margin-top: 0.3rem;
  }
`

// @see https://www.npmjs.com/package/react-currency-input-field

export function MoneyField({ label = '', wrapperStyle = {}, instructions = '', handleChange, ...props }) {
  return (
    <FieldWrapper className="field-wrapper" style={wrapperStyle}>
      <label className="form-label">
        <p>
          {label && <span>{label}</span>}
          {instructions && <span className="instructions">{instructions}</span>}
        </p>
        <CurrencyInput
          prefix="$"
          allowNegativeValue={false}
          decimalsLimit={2}
          onValueChange={(value, name) => handleChange({ target: { value, name } })}
          {...props}
        />
      </label>
    </FieldWrapper>
  )
}
