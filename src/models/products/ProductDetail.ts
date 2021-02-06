/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class ProductDetail {
    id: number;
    product: number;
    characteristic: number;
    description: string;
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor (map:any) {
      this.id = map.id as number
      this.product = map.product as number
      this.characteristic = map.characteristic as number
      this.description = map.description as string
    }
}