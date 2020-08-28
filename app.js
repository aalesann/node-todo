const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        // console.log(listado);
        // return;
        for (let tarea of listado) {
            console.log("=========== Por Hacer ===========".green);
            console.log('Tarea: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            // console.log("=================================".green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizarEstado(argv.descripcion, argv.completado);
        console.log(actualizado)
        break;
    case 'borrar':
        let borrado = porHacer.borrarTarea(argv.descripcion);

        if (borrado) {
            console.log(`La tarea ${argv.descripcion} ha sido eliminada correctamente`)
        } else {
            console.log('Error el intentar eliminar')
        }
        break;
    default:
        console.log("El comando no es reconocido");
        break;
}