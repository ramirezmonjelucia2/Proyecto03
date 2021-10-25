import { Vivienda } from './viviendas';
export class Chalet extends Vivienda {
  private _piscina: boolean
  private _Largojardin: number
  private _Anchojardin: number
  constructor(idVivienda: number, largo: number, ancho: number, piscina: boolean, ciudad: string, Largojardin: number, Anchojardin: number) {
    super(idVivienda, largo, ancho, ciudad)
    this._piscina = piscina
    this._Largojardin = Largojardin
    this._Anchojardin = Anchojardin
  }


  preciom2(): number {
    let preciom2: number;
    preciom2 = super.preciom2();
    if (this._piscina == true) {
      preciom2 += 200;
    }
    return preciom2;
  }

  sjardin(): number {
    let sjardin: number;
    sjardin = this._Anchojardin * this._Largojardin
    return sjardin
  }


  todo() {
    let resultado: string
    resultado = `${super.todo()}, ¿Tiene piscina?: ${this._piscina}, Superficie del jardin(m2): ${this.sjardin()}, `
    return resultado
  }
}
