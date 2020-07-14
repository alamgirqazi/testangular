import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientModule, HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class QuotesService {
  constructor(private httpClient: HttpClient) {}

  getQuote(): Observable<any> {
    const url = "https://random-quotes.now.sh/";
    return this.httpClient.get(url);
  }
}
