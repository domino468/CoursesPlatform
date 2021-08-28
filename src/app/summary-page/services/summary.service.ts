import {Injectable} from '@angular/core';


@Injectable()
export class SummaryService {
  private _email: string = '';

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  private _lectures: string[] = [];

  get lectures(): string[] {
    return this._lectures;
  }

  set lectures(value: string[]) {
    this._lectures = value;
  }

  constructor() {
  }
}
