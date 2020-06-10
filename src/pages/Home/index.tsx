import React, { useState, useEffect } from 'react'
import Dropzone from '../../components/Dropzone'
import { Image } from 'image-js'

import detectEdge from '../../helper/EdgeDetection'
import './styles.css'


const Home = () => {
    const [file, setFile] = useState<File>()
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        if (!file)
            return

        handleFileChanged(file)

    }, [file])

    async function handleFileChanged(file: File) {
        const reader = new FileReader() 
        
        reader.onload = () => {
            const binaryStr = reader.result
            if(!binaryStr)
                return

            Image.load(binaryStr).then((img: Image) => {
                const greyImage = img.grey()
                const processedImage = detectEdge(greyImage)
                setImageURL(processedImage)
              })
        }
        reader.readAsArrayBuffer(file)
    }
    return (
        <>
            <h1>Hello</h1>
            <Dropzone onFileUploaded={setFile} />
            {
                imageURL && <img src={imageURL} alt='...' />
            }
        </>
    )
}

export default Home