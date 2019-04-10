import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  template: `<app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>`
})
export class GlobalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
