import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OtherComponent } from "./other/other.component";
import { DatabindingComponent } from "./databinding/databinding.component";
import { PropertyBindingComponent } from "./databinding/property-binding.component";
import { EventBindingComponent } from "./databinding/event-binding.component";
import { UseHTMLelementsComponent } from './use-htmlelements.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    UseHTMLelementsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
