import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-databinding",
  templateUrl: "./databinding.component.html",
  styleUrls: ["./databinding.component.sass"],
})
export class DatabindingComponent {
  aString = "Ich bin ein String";
  aNumber = 100;
  attachClass = false;
  name = "Savas";
  attach = true;
  constructor() {
    setTimeout(() => {
      this.aNumber += 100;
      this.attachClass = true;
    }, 3000);
  }
  // event von typ Event als parameter
  onClick(event: Event) {
    alert("Geklickt");
    console.log(event);
  }
}
