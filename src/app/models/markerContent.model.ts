export class MarkerContentModel{
  // tslint:disable-next-line:variable-name
  constructor(private _langitude: number,
              // tslint:disable-next-line:variable-name
              private _latitude: number,
              // tslint:disable-next-line:variable-name
              private _nivRemplicage: number,
              // tslint:disable-next-line:variable-name
              private _title: string) {
  }


  get langitude(): number {
    return this._langitude;
  }

  get latitude(): number {
    return this._latitude;
  }

  get nivRemplicage(): number {
    return this._nivRemplicage;
  }

  get title(): string {
    return this._title;
  }


  // tslint:disable-next-line:adjacent-overload-signatures
  set langitude(value: number) {
    this._langitude = value;
  }

  set latitude(value: number) {
    this._latitude = value;
  }

  set nivRemplicage(value: number) {
    this._nivRemplicage = value;
  }

  set title(value: string) {
    this._title = value;
  }
}
