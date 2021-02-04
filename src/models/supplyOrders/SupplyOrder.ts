import SupplyProduct from "./SupplyProduct";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class SupplyOrder {
	id: number;			// id de la orden al proveedor
	date: string;		// número de la factura emitida por el proveedor
	provider: string;  			// fecha de creación
	invoice: string;      		// estado de la orden, ej: 'realizada', 'recibida', 'anulada'
	coin: string;			// Id del proveedor
	amount: string;  // id(?), nombre, cantidad y costo(?) de los productos ordenados
	purchaseDetail: SupplyProduct[]

  constructor (map:any) {
	this.id = map.id as number
	this.date = map.date as string
	this.provider = map.provider.name as string
	this.invoice = map.invoice as string
	this.coin = map.coin as string
	this.amount = map.amount as string
	this.purchaseDetail = map.purchaseDetail as []
  }
} 