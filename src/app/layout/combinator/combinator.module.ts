import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CombinatorRoutingModule} from "./combinator-routing.module";
import {CombinatorComponent} from "./combinator.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSelectModule, MatSnackBarModule,
  MatTableModule
} from "@angular/material";
import {LayoutModule} from "../layout.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    LayoutModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    CombinatorRoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [CombinatorComponent]
})
export class CombinatorModule { }
