import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.sass'],
})
export class DatabindingComponent {
  aString = 'Ich bin ein String';
  aNumber = 100;

  constructor() {
    setTimeout(() => {
      this.aNumber += 100;
    }, 3000);
  }
}
