import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import {CombinatorComponent} from "./combinator/combinator.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            redirectTo: 'combinator'
          },
          {
              path: 'combinator',
              loadChildren: './combinator/combinator.module#CombinatorModule'
          },
          {
              path: 'resistors',
              loadChildren: './resistors/resistors.module#ResistorsModule'
          },
          {
              path: 'capacitors',
              loadChildren: './capacitors/capacitors.module#CapacitorsModule'
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
