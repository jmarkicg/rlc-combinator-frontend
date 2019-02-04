import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResistorsComponent} from "./resistors.component";

const routes: Routes = [
  {
    path: '',
    component: ResistorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResistorsRoutingModule {}
