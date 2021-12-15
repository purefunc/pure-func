import React, { useMemo, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 300,
  width: 300,
  margin: 'auto',
  borderWidth: 2,
  borderRadius: 'var(--cardRadius)',
  borderColor: 'var(--lighterGray)',
  backgroundColor: 'var(--white)',
  color: 'var(--textColor)',
  outline: 'none',
  transition: 'border .24s ease-in-out',
}

const activeStyle = {
  borderColor: 'var(--gray)',
}

const acceptStyle = {
  borderColor: 'var(--darkestGray)',
}

const rejectStyle = {
  borderColor: 'var(--red)',
}

const thumbsContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
}

const thumb = {
  display: 'inline-flex',
  marginBottom: 8,
  width: 'auto',
  height: 250,
  padding: 'var(--space)',
  boxSizing: 'border-box',
}

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
  borderRadius: 'var(--cardRadius)',
}

export function Dropzone({ name, setFieldValue }) {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, open } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
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

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject],
  )

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt={file.name} />
      </div>
    </div>
  ))

  useEffect(() => {
    setFieldValue(name, files.length > 0 ? files[0].preview : '')
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    }
  }, [files])

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <button type="button" onClick={open}>
        Upload Image Here
        <div style={thumbsContainer}>{thumbs}</div>
      </button>
    </div>
  )
}
