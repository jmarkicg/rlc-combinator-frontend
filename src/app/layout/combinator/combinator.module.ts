import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CombinatorRoutingModule} from "./combinator-routing.module";
import {CombinatorComponent} from "./combinator.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatProgressBarModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    CombinatorRoutingModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [CombinatorComponent]
})
export class CombinatorModule { }
