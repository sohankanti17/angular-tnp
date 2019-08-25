import { Component, OnInit } from '@angular/core';

import {CompanyDataService} from '../../company-data/service';

@Component({
  selector: 'app-company-sidenav',
  templateUrl: './company-sidenav.component.html',
  styleUrls: ['./company-sidenav.component.css']
})
export class CompanySidenavComponent implements OnInit {

  constructor(private companyDataService: CompanyDataService) { }

  ngOnInit() {
  }

}