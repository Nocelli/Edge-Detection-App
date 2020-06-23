import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import './styles.css'

interface Props {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {

  const [selectedFile,setSelectedFile] = useState('')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setSelectedFile(URL.createObjectURL(file))
    onFileUploaded(file)
  }, [onFileUploaded])
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />
      {
        isDragActive ?
          <h2>Solte a imagem aqui...</h2> :
          (
            selectedFile.length ? 
            <img className='image' src={selectedFile} alt='Original' />
            :
          <h2>Arraste uma imagem ou clique para selecionar</h2>
          )
          
      }
    </div>
  )
}

export default Dropzone