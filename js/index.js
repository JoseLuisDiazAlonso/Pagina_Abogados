
/**Creamos una función que permita mostrar los diferentes textos en intervalos de x tiempo. */

const texts = ["TRABAJAMOS PARA DEFENDER TUS DERECHOS", "HONESTIDAD Y ÉTICA PROFRESIONAL"]; //Array con los textos a mostrar.
let index = 0; //Indice actual del texto.

function changeText() {
    document.getElementById('changingText').innerHTML = texts[index];
    index = (index + 1) % texts.length; //Avanza al siguiente texto circularmente.

}

setInterval(changeText, 3000); //Cambia el texto cada 3000 milisegundos = 3 segundos.

/**Le vamos a dar funcionalidad al icono del whatshap. Para ello vamos a crear un función en el cual si
 * la página se encuentra en el top del scroll la imagen de whatshap se muestre opaca.
 */

window.onscroll = function () {
    var icon = document.querySelector('.icono_whatsapp');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        icon.style.opacity = "1";
    } else {
        icon.style.opacity = "0";
    }
}

