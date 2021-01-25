import Feature from "../features/Feature";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class FeaturesPagination {
	count: number;
	next: number;
	previous: number;
	results: Feature[];

	constructor (map:any) {
		this.count = map.count as number;
		this.next = map.next as number;
		this.previous = map.previous as number;
		this.results = map.results as []
	}
}
