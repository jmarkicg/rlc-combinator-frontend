import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {CapacitorsComponent} from "./capacitors.component";
import {CapacitorsRoutingModule} from "./capacitors-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CapacitorsRoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [CapacitorsComponent]
})
export class CapacitorsModule { }
