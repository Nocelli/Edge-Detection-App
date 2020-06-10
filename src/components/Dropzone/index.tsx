import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface Props {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    onFileUploaded(file)
  }, [onFileUploaded])
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default Dropzone