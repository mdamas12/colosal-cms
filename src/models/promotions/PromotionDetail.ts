export default class SupplyProduct {
	quantity: number;			// id del producto
	product: number;
	combo: number;	// cantidad
	
  constructor (map:any) {
	this.quantity = map.quantity as number
	this.product = map.product as number
	this.combo = map.combo as number
  }
} 