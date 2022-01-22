export class Heroe {
    nombre: string;
    descripcion: string;
    puntuacion: number;

    public init( nombre:string, descripcion:string, puntuacion:number ){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion;
    }
}
