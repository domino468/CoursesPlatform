import {Component, OnInit} from '@angular/core';
import {SummaryService} from './services/summary.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  lecturesToDisplay: String[] = [];
  emailToDisplay: String = "";
  landingPage: string = '/landing-page';

  constructor(private summaryService: SummaryService, private router:Router) {
  }

  ngOnInit(): void {
    if(this.summaryService.lectures.length < 1 || this.summaryService.email == ''){
      this.router.navigate([this.landingPage]);
    }

    this.lecturesToDisplay = this.summaryService.lectures;
    this.emailToDisplay = this.summaryService.email;
  }


}
