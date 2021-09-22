export class Episode {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _air_date: string;
  private readonly _episode: string;
  private readonly _characters: string[];


  constructor(episodesArray: any) {
    this._id = episodesArray.id;
    this._name = episodesArray.name;
    this._air_date = episodesArray.air_date;
    this._episode = episodesArray.episode;
    this._characters = episodesArray.characters;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get air_date(): string {
    return this._air_date;
  }

  get episode(): string {
    return this._episode;
  }

  get characters(): string[] {
    return this._characters;
  }
}
