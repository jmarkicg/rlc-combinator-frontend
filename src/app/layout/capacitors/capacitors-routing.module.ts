import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CapacitorsComponent} from "./capacitors.component";

const routes: Routes = [
  {
    path: '',
    component: CapacitorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapacitorsRoutingModule {}
