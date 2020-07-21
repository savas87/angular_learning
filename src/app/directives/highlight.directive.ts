import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  OnInit,
  HostListener,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = "white";
  @Input() highlightColor = "red";

  @HostBinding("style.backgroundColor") color;
  @HostListener("mouseenter") mouseenter() {
    this.color = this.highlightColor;
  }
  @HostListener("mouseleave") mouseleave() {
    this.color = this.defaultColor;
  }
  // constructor(elRef: ElementRef, renderer: Renderer2) {
  //   // nicht der beste weg
  //   //elRef.nativeElement.style.backgroundColor = "green";
  //   // besserer weg
  //   renderer.setStyle(elRef.nativeElement, "background-color", "green");
  // }
  ngOnInit(): void {
    setTimeout(() => {
      this.color = "red";
    }, 3000);
    this.color = this.defaultColor;
  }
}
