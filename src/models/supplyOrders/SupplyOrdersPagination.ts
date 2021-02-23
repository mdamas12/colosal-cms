import SupplyOrder from "./SupplyOrder";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class SupplyOrdersPagination {
	count: number;
	next: number;
	previous: number;
	results: SupplyOrder[];

	constructor (map:any) {
		this.count = map.count as number;
		this.next = map.next as number;
		this.previous = map.previous as number;
		this.results = map.results as []
	}
}
