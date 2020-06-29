import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-property-binding",
  template: ` <p>{{ name }}</p> `,
  styles: [],
})
export class PropertyBindingComponent {
  // alias setzen
  @Input("nameData") name: string;
}
