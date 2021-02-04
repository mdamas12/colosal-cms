export default class Supplier {
	id: number;           // id del proveedor
	name: string;  // nombre de la empresa, ej: Galuapps
	address: string;      // nombre de algún contacto de la empresa, ej: Daniella Cova
  email: string;        // numero de telefono
	number: string;        // correo electrónico

  constructor (map:any) {
    this.id = map.id as number
    this.name = map.name as string;
    this.address = map.address as string;
    this.email = map.email as string;
    this.number = map.number as string;
  }
} 