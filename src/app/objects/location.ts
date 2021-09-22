export class Location {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _type: string;
  private readonly _dimension: string;
  private readonly _residents: string[];

  constructor(locationArray: any) {
    this._id = locationArray.id;
    this._name = locationArray.name;
    this._type = locationArray.type;
    this._dimension = locationArray.dimension;
    this._residents = locationArray.residents;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  get dimension(): string {
    return this._dimension;
  }

  get residents(): string[] {
    return this._residents;
  }
}
