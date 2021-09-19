import React from 'react'
import styled from 'styled-components'
import { Field as FormikField, ErrorMessage } from 'formik'

export const Field = ({ isFormik = false, label = '', wrapperStyle = {}, instructions = '', ...props }) => {
  if (props.type === 'checkbox') {
    return (
      <CheckboxWrapper style={wrapperStyle}>
        <FormikField className="form-input" {...props} />
        <span>{label}</span>
      </CheckboxWrapper>
    )
  } else {
    return (
      <FieldWrapper className="field-wrapper" style={wrapperStyle}>
        <label className="form-label">
          <p>
            {label && <span>{label}</span>}
            {instructions && <span className="instructions">{instructions}</span>}
          </p>
          {isFormik ? (
            <>
              <FormikField className="form-input" {...props} />
              <ErrorMessage name={props.name} component="div" className="field-error" />
            </>
          ) : (
            <input className="form-input" {...props} />
          )}
        </label>
      </FieldWrapper>
    )
  }
}

const CheckboxWrapper = styled.div`
  margin-bottom: 0.6rem;

  input[type='checkbox'] {
    transform: scale(1.6);
    margin: 0;
    margin-right: 0.8rem;
    margin-left: 0.2rem;
  }
`

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
