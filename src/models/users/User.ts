export default class User {
	id: number;           // id del proveedor
	fullname: string;  // nombre de la empresa, ej: Galuapps
	username: string;      // nombre de algún contacto de la empresa, ej: Daniella Cova
  password: string;        // numero de telefono
  phone: string;        // correo electrónico

  constructor (map:any) {
    this.id = map.id as number
    this.fullname = map.fullname as string;
    this.username = map.username as string;
    this.password = map.password as string;
    this.phone = map.phone as string;
  }
} 