import { leerTeclado } from '../functions/lecturaTeclado'
import { Vivienda } from '../classes/viviendas'
import { Casa } from '../classes/casas'
import { Chalet } from '../classes/chalets'

export const nuevaVivienda = async (viviendas: Array<Vivienda>) => {
    let vivi: Vivienda;
    const idVivienda = parseInt(await leerTeclado('\nIngrese el Id de la Vivienda '));
    const largo = parseInt(await leerTeclado('Por favor, indique el largo de la vivienda '));
    const ancho = parseInt(await leerTeclado('Por favor, indique el ancho de la vivienda '));
    const ciudad = await leerTeclado('\nIngrese la ciudad donde se encuentra ');

    vivi = new Vivienda(idVivienda, largo, ancho, ciudad);
    viviendas.push(vivi);
}


export const nuevoChalet = async (viviendas: Array<Vivienda>) => {
    let vivi: Vivienda;
    const idVivienda = parseInt(await leerTeclado('\nIngrese el Id de la Vivienda '));
    const largo = parseInt(await leerTeclado('Por favor, indique el largo de la vivienda '));
    const ancho = parseInt(await leerTeclado('Por favor, indique el ancho de la vivienda '));
    const piscina = Boolean(await leerTeclado('Por favor, indique si tiene piscina (true or false) '));
    const ciudad = await leerTeclado('\nIngrese la ciudad donde se encuentra ');
    const Largojardin = parseInt(await leerTeclado('Por favor, indique el largo del jardín'));
    const Anchojardin = parseInt(await leerTeclado('Por favor, indique el ancho del jardín'));
    vivi = new Chalet(idVivienda, largo, ancho, piscina, ciudad, Largojardin, Anchojardin);
    viviendas.push(vivi);
}

export const nuevaCasa = async (viviendas: Array<Vivienda>) => {
    let vivi: Vivienda;
    const idVivienda = parseInt(await leerTeclado('\nIngrese el Id de la Vivienda '));
    const largo = parseInt(await leerTeclado('Por favor, indique el largo de la vivienda '));
    const ancho = parseInt(await leerTeclado('Por favor, indique el ancho de la vivienda '));
    const ciudad = await leerTeclado('\nIngrese la ciudad donde se encuentra ');
    const cochera = Boolean(await leerTeclado('Por favor, indique si tiene cochera (true or false) '));
    vivi = new Casa(idVivienda, largo, ancho, ciudad, cochera);
    viviendas.push(vivi);
}


export const listar = async (viviendas: Array<Vivienda>) => {
    for (let vivi of viviendas) {
        console.log(`${vivi.todo()}`);
    }
}


export const borrarvivienda = async (viviendas: Array<Vivienda>) => {
    let registro: number = parseInt(await leerTeclado('\nIntroduce el id de la vivienda'));
    for (let i = 0; i < viviendas.length; i++) {
        if (viviendas[i].idVivienda == registro) {
            viviendas.splice(i, 1);
        }
    }
    console.log('¡Vivienda eliminada!');
}

export const modificarvivienda = async (viviendas: Array<Vivienda>) => {
    let city: string = await leerTeclado('\nIntroduce la nueva ciudad ')
    viviendas.forEach(function (item) {
        item.cogerCiudad(city)
    })

}



export const verinfovivienda = async (viviendas: Array<Vivienda>) => {
    let ID: number = parseInt(await leerTeclado('\nIntroduce el id de la vivienda '));
    if (viviendas != undefined) {
        let id: number = viviendas.findIndex((obj => obj.idVivienda == ID));
        console.log(viviendas[id]);
    }

}