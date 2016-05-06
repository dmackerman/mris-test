import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'base-popup',
  templateUrl: 'base-popup.component.html',
  // template: `
  //   <p>fuck a duck</p>
  // `,
  styleUrls: ['base-popup.component.css']
})
export class BasePopupComponent implements OnInit {

  ngOnInit() {
    console.log('BasePopupComponent onInit');
  }

}
