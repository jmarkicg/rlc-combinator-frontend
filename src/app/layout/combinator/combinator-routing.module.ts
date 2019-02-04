import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CombinatorComponent} from "./combinator.component";

const routes: Routes = [
  {
    path: '',
    component: CombinatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinatorRoutingModule {}
