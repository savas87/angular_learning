import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.sass"],
})
export class DirectivesComponent implements OnInit {
  color = "red";
  show = true;
  elemente = [1, 2, 3, 4];
  value = 10;
  constructor() {
    setTimeout(() => {
      this.color = "green";
    }, 3000);
  }
  switch(): void {
    this.show = !this.show;
  }
  ngOnInit(): void {}
}
