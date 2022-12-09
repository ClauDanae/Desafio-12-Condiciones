const Destaque = () => {
    const Imagen = document.querySelector("#Img_Unicorns")
    if (Imagen.style.border == "2px solid red") {
        Imagen.style.border = "0px";
    } else {
        Imagen.style.border = "2px solid red"
    }
}
const respuesta = () => {
    const cant01 = document.querySelector("#Sticker_1").value || 0
    const cant02 = document.querySelector("#Sticker_2").value || 0
    const cant03 = document.querySelector("#Sticker_3").value || 0

    const verificar = document.querySelector("#respuesta");
    var total = parseInt(cant01) + parseInt(cant02) + parseInt(cant03)
    if (total <= 10) {
        verificar.innerHTML = "Llevas " + total + " stickers"
    } else {
        verificar.innerHTML = "Llevas demasiados stickers"
    }
}
const respuesta2 = () => {
    const cant01 = document.querySelector("#Cod_1").value;
    const cant02 = document.querySelector("#Cod_2").value;
    const cant03 = document.querySelector("#Cod_3").value;

    const verificar2 = document.querySelector("#respuesta2");
    var total1 = cant01 + cant02 + cant03
    if (total1 == 911) {
        verificar2.innerHTML = "password 1 correcto"
    } else if (total1 == 714){
        verificar2.innerHTML = "password 2 correcto"
    }
    else (
        verificar2.innerHTML = "password incorrecto"
    )
}
