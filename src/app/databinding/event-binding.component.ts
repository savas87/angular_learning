import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-event-binding",
  template: ` <div (click)="onClick()"></div> `,
  styles: [
    `
      div {
        width: 100px;
        height: 100px;
        background-color: gold;
      }
    `,
  ],
})
export class EventBindingComponent {
  // new EventEmitter<typ>()
  // wichtig ist man muss sagen welcher typ erwartet wird
  @Output() clicked = new EventEmitter<string>();
  onClick() {
    this.clicked.emit("Neue Text");
  }
}
