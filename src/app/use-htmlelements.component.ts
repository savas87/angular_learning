import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-use-htmlelements",
  template: ` <input type="text" #i />
    <hr />
    <ng-content></ng-content>`,
  styles: [],
})
export class UseHTMLelementsComponent {
  @ViewChild("i") input: ElementRef;
  @ContentChild("paragraph") paragraph: ElementRef;
  constructor() {
    setTimeout(() => {
      this.input.nativeElement.value = "Wert überschreiben";
      this.paragraph.nativeElement.innerText =
        "Wert ist überschrieben worden vom Kind";
    }, 3000);
  }
}
