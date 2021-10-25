import { Vivienda } from './viviendas';
export class Casa extends Vivienda {
    private _cochera: boolean
    constructor(idVivienda: number, largo: number, ancho: number, ciudad: string, cochera: boolean) {
        super(idVivienda, largo, ancho, ciudad);
        this._cochera = cochera;
    }

    // sobre escribimos el método preciom2
    preciom2(): number {
        let preciom2: number;
        preciom2 = super.preciom2();
        if (this._cochera == true) {
            preciom2 += 1000;
        }
        return preciom2;
    }

    get cochera(): boolean {
        return this._cochera
    }

    todo() {
        return `${super.todo()}, ¿Tiene cochera?: ${this._cochera}`
    }
}
