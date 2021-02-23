import Supplier from "./Supplier";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class SupplierPagination {
	count: number;
	next: number;
	previous: number;
	results: Supplier[];

	constructor (map:any) {
		this.count = map.count as number;
		this.next = map.next as number;
		this.previous = map.previous as number;
		this.results = map.results as []
	}
}
