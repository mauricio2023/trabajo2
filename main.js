let color = document.querySelector("#btn_color");
let transparencia = document.querySelector("#btn_transparencia");
let tamaño = document.querySelector("#btn_tamaño");
let border = document.querySelector("#btn_border");
let difuminado = document.querySelector("#btn_difuminado");
let suturacion = document.querySelector("#btn_suturacion");
let contraste = document.querySelector("#btn_contraste");
let imprimir = document.querySelector("#btn_imprimir")
let contenedor = document.querySelector(".cotainer_ejemplo")
let containerResiltado = document.querySelector(".cotainer_ejemplo")

function hexToRgb(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return rgba = {
            red: (c>>16)&255,
            green: (c>>8)&255,
            blue: c&255
    }
}
}

tamaño.addEventListener("input", (e) => {
   contenedor.style.width = `${e.target.value}%`;
   contenedor.style.height = `${e.target.value}%`;
})

 color.addEventListener("input", (e) => {  

     let colorEnHex = (color.value)
     let newColor = hexToRgb(colorEnHex)
     let {red, green, blue} = newColor
     contenedor.style.setProperty("--r", `${red}`)
     contenedor.style.setProperty("--g", `${green}`)
     contenedor.style.setProperty("--b", `${blue}`)
    
 })

 transparencia.addEventListener('input', (e => {
    contenedor.style.setProperty("--a", `${e.target.value * 1 / 100}`)
 }))


border.addEventListener("input", (e) => {
    contenedor.style.borderRadius = `${e.target.value}%`;
    
})

difuminado.addEventListener("input", (e) => {
   contenedor.style.setProperty("--blur", `${e.target.value}px`)
})

suturacion.addEventListener("input", (e) => {
    contenedor.style.setProperty ("--suturate", `${e.target.value}%`)
})

contraste.addEventListener("input", (e) => {
    contenedor.style.setProperty ("--contrast", `${e.target.value}%`)
})

let colorEnHex = (color.value)
let newColor = hexToRgb(colorEnHex)
let {red, green, blue} = newColor

imprimir.addEventListener("click", (e) => {
   containerResiltado.innerHTML =`<p class="p_resulrado">
   width: ${tamaño.value}%; <br><br>
   height: ${tamaño.value}%; <br><br>
   border-radius: ${border.value}px; <br><br>
   backdrop-filter: blur(${difuminado.value}px) contrast(${contraste.value}%) saturate(${suturacion.value}%); <br><br>
   background: rgba(${red}, ${green}, ${blue}, ${transparencia.value * 1 / 100});<br><br>
    </p>`
})
