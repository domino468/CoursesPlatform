import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Offer} from "./offer";
import {environment} from "../../environments/environment";

@Injectable()
export class OfferService {
  private apiServerUrl: string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${this.apiServerUrl}`,
    }),
  };

  private _mail: String = '';
  private _categoryTitle: String = '';
  private _courseTitle: String = '';
  private _lectureTitles: String[] = [];

  constructor(private http: HttpClient) {
  }

  createOffer(offer: Offer) {
    this.http.post<Offer>(`${this.apiServerUrl}/offer/add`, offer, this.httpOptions).toPromise().catch(
      (error) => {
        alert(error.message)
      }
    )
  }

  get mail(): String {
    return this._mail;
  }

  set mail(value: String) {
    this._mail = value;
  }

  get categoryTitle(): String {
    return this._categoryTitle;
  }

  set categoryTitle(value: String) {
    this._categoryTitle = value;
  }

  get courseTitle(): String {
    return this._courseTitle;
  }

  set courseTitle(value: String) {
    this._courseTitle = value;
  }

  get lectureTitles(): String[] {
    return this._lectureTitles;
  }

  set lectureTitles(value: String[]) {
    this._lectureTitles = value;
  }
}
