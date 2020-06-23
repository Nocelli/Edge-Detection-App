import React from 'react'
import { FiX } from 'react-icons/fi'
import './styles.css'

interface Props {
    isOpen: boolean
    setIsOpen: (newValue: boolean) => void
}


const InformationModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    if (!isOpen)
        return null

    return (
        <div className='modalBackground'>
            <div className='modalContent'>
                <div className='modalHeader'>
                    <h1>Informações</h1>
                    <button onClick={() => setIsOpen(!isOpen)} >
                        <FiX />
                        <span>Fechar</span>
                    </button>
                </div>
                <div className='modalBody'>
                    <h2>Por que detectar bordas?</h2>
                    <h3>A detecção de borda é bastante usada na área de extração de características. Sua utilização reduz significativamente a quantidade de dados a serem processados, e descarta informação que é considerada menos relevante, ainda que preservando importantes propriedades estruturais de uma imagem.</h3>
                    <h2>Como detectar bordas?</h2>
                    <h3>Usando o gradiente da imagem!</h3>
                    <h2>O que é o gradiente de uma imagem?</h2>
                    <h3>O gradiente de uma imagem é um campo vetorial tal como em qualquer função de duas variáveis, exemplo: uma função 'f(x,y)', que representa o nível de cor em uma determinada coordenada '(x,y)'.</h3>
                    <h2>Qual método foi usado nesse projeto?</h2>
                    <h3>Algoritmo de Canny</h3>
                    <h2>Métodos usuais para detecção de bordas:</h2>
                    <h4>Sobel: provavelmente o mais utilizado.</h4>
                    <h4>Prewitt: similar ao método Sobel.</h4>
                    <h4>Roberts: um dos primeiros métodos desenvolvidos.</h4>
                    <h4>Canny: o melhor método, mas é o que exige maior esforço computacional.</h4>
                    <h2>Fontes:</h2>
                    <a href='https://pt.wikipedia.org/wiki/Detec%C3%A7%C3%A3o_de_borda#:~:text=A%20detec%C3%A7%C3%A3o%20de%20borda%20%C3%A9,propriedades%20estruturais%20de%20uma%20imagem.'>Detecção de borda</a>
                    <a href='https://edisciplinas.usp.br/pluginfile.php/4301995/mod_resource/content/0/V10%20-Deteccao%20de%20bordas.pdf'>Visão Computacional</a>
                    <a href='https://en.wikipedia.org/wiki/Canny_edge_detector#:~:text=The%20Canny%20edge%20detector%20is,explaining%20why%20the%20technique%20works.'>Algoritmo de Canny</a>
                </div>
            </div>
        </div>
    )

}

export default InformationModal