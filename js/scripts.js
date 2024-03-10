document.getElementById("inputPixel").addEventListener("input   ", function(){
    const pixelValue = parseFloat(this.value)
    const remValue = pixelValue / 16
    document.getElementById("inputREM").value = remValue
})

// function calcular() {
//     try{
//         let a = parseFloat(document.getElementById("inputPixel").value) || 0;
//         document.getElementById("inputREM").value = a / 16;
//     } catch (e) {}
// }