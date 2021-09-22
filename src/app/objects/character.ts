export class Character {

  private readonly _id: string;
  private readonly _name: string;
  private readonly _status: string;
  private readonly _species: string;
  private readonly _type: string;
  private readonly _gender: string;
  private readonly _origin: string[];
  private readonly _location: string[];
  private readonly _image: string;
  private readonly _episodes: string[];

  constructor(characterArray: any) {
    console.log(characterArray)
    this._id = characterArray.id;
    this._name = characterArray.name === "" ? "-" : characterArray.name;
    this._status = characterArray.status === "" ? "-" : characterArray.status;
    this._species = characterArray.species === "" ? "-" : characterArray.species;
    this._type = characterArray.type === "" ? "-" : characterArray.type;
    this._gender = characterArray.gender === "" ? "-" : characterArray.gender;
    this._origin = characterArray.origin;
    this._location = characterArray.location;
    this._image = characterArray.image === "" ? "-" : characterArray.image;
    this._episodes = characterArray.episodes;
  }


  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get status(): string {
    return this._status;
  }

  get species(): string {
    return this._species;
  }

  get type(): string {
    return this._type;
  }

  get gender(): string {
    return this._gender;
  }

  get origin(): string[] {
    return this._origin;
  }

  get location(): string[] {
    return this._location;
  }

  get image(): string {
    return this._image;
  }

  get episodes(): string[] {
    return this._episodes;
  }
}
