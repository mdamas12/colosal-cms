/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class Category {
    id: number;
    name: string;
    description: string;
    status: string;
    created: string;
    modified: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor (map:any) {
      this.id = map.id as number
      this.name = map.name as string
      this.description = map.description as string
      this.status = map.status as string
      this.created = map.created as string
      this.modified = map.modified as string
    }
}
