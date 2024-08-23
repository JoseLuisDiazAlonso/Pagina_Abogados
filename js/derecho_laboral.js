/**Le vamos a dar funcionalidad al icono del whatshap. Para ello vamos a crear un función en el cual si
 * la página se encuentra en el top del scroll la imagen de whatshap se muestre opaca.
 */

window.onscroll = function () {
    var icon = document.querySelector('.icono_whatsapp');
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        icon.style.opacity = "1";
    } else {
        icon.style.opacity = "0";
    }
}
