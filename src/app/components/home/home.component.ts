import {Component, OnInit} from '@angular/core';

import {SpacemenService} from '../../services/spacemen.service';
import {Spaceman} from '../../models/spaceman';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  spacemen: Spaceman[] = [];
  // spacemenOriginal: Spaceman[] = [];
  isLoaded = false;
  searchValue = '';
  dirSort = 'No';

  constructor(private spacemenService: SpacemenService) {
  }

  ngOnInit() {

    this.spacemenService.getAllSpicemen().subscribe((data: Spaceman[]) => {
      data.forEach((spaceman: Spaceman) => {
        this.spacemen.push(spaceman);
        // this.spacemenOriginal.push(spaceman);
        this.isLoaded = true;
      });
    });
  }
}
