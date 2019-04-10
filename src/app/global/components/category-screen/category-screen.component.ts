import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as json from '../../../library/shared/components/constant/catalog.json';

@Component({
  selector: 'app-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.css']
})
export class CategoryScreenComponent implements OnInit {
  location: String;
  branch : String;
  categories = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.branch = params.branch; this.location = params.location;
      this.getCategory(this.branch);
    });
  }

  private getCategory(branch): void {
    if(json.status === 'success') {
      json.data.locations.map(location => {
        if(location.name === this.location) {
          location.branches.map(branch => { if(branch.name === this.branch) { this.categories = branch.categories }})
        }
      });
    } else {}
  }
}
