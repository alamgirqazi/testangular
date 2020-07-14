import { Component, OnInit } from "@angular/core";
import { QuotesService } from "./quotes.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "testangular";
  quote;
  author;

  constructor(private quotesService: QuotesService) {}
  ngOnInit() {
    this.quotesService.getQuote().subscribe(
      (data) => {
        console.log("got data", data);
        this.quote = data.data.quote;
        this.author = data.data.author;
      },

      (err) => {
        console.log("err", err);
      }
    );
  }
}
