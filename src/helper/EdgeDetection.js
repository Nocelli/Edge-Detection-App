import cannyEdgeDetector from 'canny-edge-detector';

function detectEdge( img ) {
    const edge = cannyEdgeDetector(img,{
        lowThreshold: 40,
        highThreshold: 70,
        gaussianBlur: 2.5,
    }).gaussianFilter()
    return edge.toDataURL()
}

export default detectEdge