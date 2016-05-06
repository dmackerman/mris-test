import { Component, OnInit } from '@angular/core';
import { BasePopupComponent } from './components/base-popup';

@Component({
  moduleId: module.id,
  selector: 'mris-test-app',
  templateUrl: 'mris-test.component.html',
  styleUrls: ['mris-test.component.css'],
  directives: [BasePopupComponent]
})
export class MrisTestAppComponent implements OnInit {
  title: string = 'fuck';
  
  ngOnInit() {
    console.log('MRIS INIT');
  }
   
}
