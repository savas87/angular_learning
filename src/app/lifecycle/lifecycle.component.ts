import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
  Input,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-lifecycle",
  template: ` <div>{{ name }}</div> `,
  styles: [],
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() name: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
    console.log(changes["name"].currentValue);
    console.log(changes["name"].previousValue);
  }
  ngOnInit(): void {
    console.log("on init");
  }
  ngDoCheck(): void {
    console.log("do check");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("Destroy");
  }
}
