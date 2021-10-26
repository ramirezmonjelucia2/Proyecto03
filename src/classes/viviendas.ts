export class Vivienda {
  private _idVivienda: number
  private _largo: number
  private _ancho: number
  public ciudad: string
  constructor(idVivienda: number, largo: number, ancho: number, ciudad: string) {
    this._idVivienda = idVivienda
    this._largo = largo
    this._ancho = ancho
    this.ciudad = ciudad
  }
  get idVivienda() {
    return this._idVivienda
  }


  get largo() {
    return this._largo
  }
  get ancho() {
    return this._ancho
  }
  //Calcular el precio de la vivienda según metros cuadrados
  preciom2(): number {
    let preciom2: number;
    //1.941€ está el metro cuadrado en Sevilla
    preciom2 = 1.941 * this.superficie()
    return preciom2;
  }
  superficie(): number {
    let superficie: number;
    superficie = this._ancho * this.largo
    return superficie
  }
  todo() {
    return `Superficie(m2): ${this.superficie()}, PrecioTotal: ${this.preciom2()}€, Ciudad: ${this.ciudad}`;
  }
}
