/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class Promotion {
	id: number;			// id de la orden al proveedor
	name: string;		// número de la factura emitida por el proveedor
	description: string;  			// fecha de creación
	image: string;      		// estado de la orden, ej: 'realizada', 'recibida', 'anulada'
	price: number;			// Id del proveedor
	coin: string;  // id(?), nombre, cantidad y costo(?) de los productos ordenados
	quantity: number;
	category: number;

  constructor (map:any) {
	this.id = map.id as number
	this.name = map.name as string
	this.description = map.description as string
	this.image = map.image as string
	this.price = map.price as number
	this.coin = map.coin as string
	this.quantity = map.quantity as number
	this.category = map.category as number
  }
} 