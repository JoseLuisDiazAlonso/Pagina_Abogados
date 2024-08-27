/**Creamos una función que dará funcionalidad a los campos */

document.getElementById('submit_btn').addEventListener('click', function (event) {

    event.preventDefault();

    //obtener los valores de los campos
    const nombre = document.getElementById('nombre_input').value.trim();
    const apellidos = document.getElementById('apellidos_input').value.trim();
    const comentarios = document.getElementById('comentarios_area').value.trim();

    /**expresión regular que hará que en los input de nombre y apellidos solo haya texto nada de caracteres especiales o código */

    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    //Verificamos que los campos no estén vacíos

    if (nombre === '' || apellidos === '' || comentarios === '') {
        alert("Todos los campos deben de estar completados");
        return;
    }

    //Comprobamos que los nombres y apellidos solo sean texto

    if (!regex.test(nombre) || !regex.test(apellidos)) {
        alert("Los campos de nombre y apellidos solo pueden tener texto.");
    } else {

        /**Si todos los campos son correctos se borran los campos y se muestra el mensaje datos enviados correctamente */
        document.getElementById('nombre_input').value = '';
        document.getElementById('apellidos_input').value = '';
        document.getElementById('comentarios_area').value = '';

        //Mostrar un mensaje indicando que los datos fueron enviados
        alert("Datos enviados");
    }
});