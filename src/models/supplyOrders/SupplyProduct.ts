export default class SupplyProduct {
	id: number;			// id del producto
	purchase: number;
	purchase_price: string;		// nombre del producto
	purchase_quantity: number;	// cantidad
	purchase_received: number;
	status: string;
	product: any;

  constructor (map:any) {
	this.id = map.product as number,
	this.purchase = map.purchase as number,
	this.purchase_price = map.purchase_price as string,
	this.purchase_quantity = map.purchase_quantity as number,
	this.purchase_received = map.purchase_quantity as number,
	this.status = map.status as string
	this.product = map.product as {}
  }
} 