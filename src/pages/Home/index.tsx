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
            if (!binaryStr)
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
        <div className='pageContainer'>
            <div className='header'>
                <h1>Detecção de cantos</h1>
            </div>
            <div className='content'>
                <div className='imageHolder'>
                    <Dropzone onFileUploaded={setFile} />
                </div>
                <div className='imageHolder'>
                    {
                        imageURL ? <img className='image' src={imageURL} alt='Processada' /> : <h2>A imagem processada aparecerá aqui!</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home