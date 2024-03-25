const eliminarCerosDerecha = (numero, decimales) => {
    const numeroRedondeado = Number(numero.toFixed(decimales));
    const cadenaNumero = numeroRedondeado.toString();
    const numeroSinCeros = cadenaNumero.replace(/\.?0+$/, '');
    return numeroSinCeros;
}

const convertToRem = (pixelValue) => {
    const baseFontSize = 16;
    const remValue = pixelValue / baseFontSize;
    const remValueFormatted = eliminarCerosDerecha(remValue, 3);
    document.getElementById('inputRem').value = remValueFormatted;
}

const convertToPixel = (remValue) => {
    const baseFontSize = 16;
    const pixelValue = remValue * baseFontSize;
    const pixelValueFormatted = eliminarCerosDerecha(pixelValue, 3);
    document.getElementById('inputPixel').value = pixelValueFormatted;
}