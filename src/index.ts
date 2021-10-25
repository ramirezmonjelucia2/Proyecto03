import { Vivienda } from './classes/viviendas';
import { nuevaVivienda, nuevaCasa, nuevoChalet, listar, modificarvivienda, borrarvivienda, verinfovivienda } from './functions/funciones';
import { menuViviendas } from './view/menu';

const main = async () => {
  let viviendas: Array<Vivienda> = new Array<Vivienda>();
  let n: number
  do {
    n = await menuViviendas()
    switch (n) {
      case 1:
        await nuevaVivienda(viviendas)
        break
      case 2:
        await nuevoChalet(viviendas)
        break
      case 3:
        await nuevaCasa(viviendas)
        break
      case 4:
        listar(viviendas)
        break
      case 5:
        await modificarvivienda(viviendas)
        break
      case 6:
        await borrarvivienda(viviendas)
        break
      case 7:
        await verinfovivienda(viviendas)
        break

      case 0:
        console.log('\n¡Vuelve pronto!')
    }
  } while (n != 0)
}
main()






















/*
let vivienda: Vivienda;
let chalet: Chalet;
let casa: Casa;
//let apartamento: Apartamento;



// Declaramos tipo array de tipo Automovil de dos formas
let viviendas: Array<Vivienda> = new Array<Vivienda>();

vivienda = new Vivienda(14, 10);
console.log(`Superficie: ${vivienda.superficie()}`);
console.log(`PrecioTotal/m2: ${vivienda.preciom2()}`);

casa = new Casa(30, 13, true);
console.log(`Superficie: ${casa.superficie()}`);
console.log(`PrecioTotal/m2: ${casa.preciom2()}`);
console.log(`¿Tiene piscina?: ${casa.piscina}`)

// Podemos asignar tanto Automovil como TodoTerreno
viviendas[0] = new Vivienda(14, 10);
viviendas[1] = new Vivienda(15, 9);
viviendas[2] = new Casa(20, 20, true);
viviendas[3] = new Casa(25, 10, false);

// recorremos el array
// Polimorfismo la variable a puede ser de cualquiera
// de los tipos y sabe qué método ejecutar
for (let vivi of viviendas) {

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!POLIMORFISMO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //a.todo apuntará al todo de un automovil cuando a sea un automovil y cuando a sea un todo terreno a valdra todo de todoterreno:
  // a.todo() cuando sea todoterreno(automovil[0],autoomovil[1]):         resultado = `${super.todo()}, tracción: ${this._traccion}`;
  //a.todo() cuando sea automovil(automovil[3],autoomovil[4]): `Precio base: ${this._precioBase}, potencia: ${this._potenciaMotor}`;
}


*/