import { leerTeclado } from '../view/lecturaTeclado'

export const menuViviendas = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Crear vivienda')
    console.log('2.- Crear chalet')
    console.log('3.- Crear casa')
    console.log('4.- Listar viviendas')
    console.log('5.- Modificar viviendas')
    console.log('6.- Borrar vivienda')
    console.log('7.- Ver información')
    console.log('0.- SALIR')
    n = parseInt(await leerTeclado('--OPCIÓN--'))
    return n
}

