import Customer from "./Customer";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class CustomersPagination {
	count: number;
	next: number;
	previous: number;
	results: Customer[];

	constructor (map:any) {
		this.count = map.count as number;
		this.next = map.next as number;
		this.previous = map.previous as number;
		this.results = map.results as []
	}
}
