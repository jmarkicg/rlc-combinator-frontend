import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CombinatorRoutingModule} from "./combinator-routing.module";
import {CombinatorComponent} from "./combinator.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    CombinatorRoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [CombinatorComponent]
})
export class CombinatorModule { }
