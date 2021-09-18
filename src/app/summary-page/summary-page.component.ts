import {Component, OnInit} from '@angular/core';
import {SummaryService} from './services/summary.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  lecturesToDisplay: String[] = [];
  emailToDisplay: String = "";

  constructor(private summaryService: SummaryService) {
  }

  ngOnInit(): void {
    this.lecturesToDisplay = this.summaryService.lectures;
    this.emailToDisplay = this.summaryService.email;
  }


}
