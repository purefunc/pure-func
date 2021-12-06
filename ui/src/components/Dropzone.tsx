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
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: 'white',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
}

const activeStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
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
  padding: 4,
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
  console.log(files, 'files')

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
        <img src={file.preview} style={img} />
      </div>
    </div>
  ))

  useEffect(() => {
    if (files.length > 0) {
      setFieldValue(name, files[0].preview)
    } else {
      setFieldValue(name, '')
    }
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
