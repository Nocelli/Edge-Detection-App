import React, { useState, useEffect } from 'react'
import Dropzone from '../../components/Dropzone'
import InformationModal from '../../components/InformationModal'
import { BsInfoCircle } from 'react-icons/bs'
import { Image } from 'image-js'

import detectEdge from '../../helper/EdgeDetection'
import './styles.css'


const Home = () => {
    const [file, setFile] = useState<File>()
    const [imageURL, setImageURL] = useState('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
        <>
            <div className='pageContainer'>
                <div className='header'>
                    <h1>Detecção de bordas</h1>
                    <button className='infoButton' onClick={() => setIsOpen(!isOpen)} >
                        <span><BsInfoCircle /></span>
                        <h2>Por que detectar bordas?, como? e mais...</h2>
                    </button>
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
            <InformationModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}

export default Home