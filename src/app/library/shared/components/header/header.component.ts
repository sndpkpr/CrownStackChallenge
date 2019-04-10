import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import * as json from '../constant/catalog.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  location = [];
  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.getInitOptions();
  }

  private getInitOptions(): void {
    if(json.status === 'success') {
      json.data.locations.map(location => {
        let items = [];
        location.branches.map(branch => 
          items.push({label : branch.name, command: (event) => this.router.navigate(['/category-screen-component'], { queryParams: { location : location.name, branch: branch.name } })})
        )
        const obj = { label: location.name, items: items }
        this.location.push(obj)
      });
    } else {}
  }
}
