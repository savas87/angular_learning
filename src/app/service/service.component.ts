import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "si-service",
  template: `
    <div class="container">
      <hr />
      <h1>Services</h1>
      <si-cmp-a></si-cmp-a>
      <si-cmp-b></si-cmp-b>
    </div>
  `,
  providers: [DataService],
})
export class ServiceComponent {}
