import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.sass"],
})
export class DirectivesComponent implements OnInit {
  color = "red";
  constructor() {
    setTimeout(() => {
      this.color = "green";
    }, 3000);
  }

  ngOnInit(): void {}
}
