/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class Product {
    id: number;
    name: string;
    description: string;
    image: File;
    price:number;
    coin: string;
    category: number;
    brand: number ;
    quantity: number ;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor (map:any) {
      this.id = map.id as number
      this.name = map.name as string
      this.description = map.description as string
      this.image = map.image as File
      this.price = map.price as number
      this.coin = map.coint as string
      this.quantity = map.quantity as number
      this.category = map.category as number
      this.brand = map.brand as number
    }
}
