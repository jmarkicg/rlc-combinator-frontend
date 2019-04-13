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
  MatProgressBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {CombinationsComponent} from "./combinations/combinations.component";

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatPaginatorModule,
    CombinatorRoutingModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatSortModule
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [CombinatorComponent, CombinationsComponent]
})
export class CombinatorModule { }
