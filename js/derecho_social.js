
/**Damos funcionalidad al icono del whasap para que cuando el scroll este muy alto no se vea. */
window.onscroll = function () {
    var icon = document.querySelector('.icono_whatsapp');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        icon.style.opacity = "1";
    } else {
        icon.style.opacity = "0";
    }
}