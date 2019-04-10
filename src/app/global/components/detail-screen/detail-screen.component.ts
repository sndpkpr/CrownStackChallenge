import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as json from '../../../library/shared/components/constant/catalog.json';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.css']
})
export class DetailScreenComponent implements OnInit {
  location: String;
  branch : String;
  category : String;
  subCategories = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.branch = params.branch; this.location = params.location; this.category = params.name
      this.getCategory(this.branch);
    });
  }

  private getCategory(branch): void {
    if(json.status === 'success') {
      json.data.locations.map(location => {
        if(location.name === this.location) {
          location.branches.map(branch => { 
            if(branch.name === this.branch) { 
              branch.categories.map( categories=> { if(categories.name == this.category) { this.subCategories = categories.subcategories }})
            }})
        }
      });
    } else {}
  }

}
