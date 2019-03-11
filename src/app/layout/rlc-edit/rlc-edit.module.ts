import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule, MatSnackBar, MatSnackBarModule
} from "@angular/material";
import {LayoutModule} from "../layout.module";
import {RlcEditComponent} from "./rlc-edit.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    LayoutModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  exports: [RlcEditComponent],
  declarations: [RlcEditComponent],
  entryComponents: [RlcEditComponent]
})
export class RlcEditModule { }
