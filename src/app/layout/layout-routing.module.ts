import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import {CombinatorComponent} from "./components/rlc/combinator/combinator.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {CapacitorsComponent} from "./components/rlc/capacitors/capacitors.component";
import {InductorsComponent} from "./components/rlc/inductors/inductors.component";
import {ResistorsComponent} from "./components/rlc/resistors/resistors.component";

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
              component: CombinatorComponent
          },
          {
              path: 'resistors',
              component: ResistorsComponent
          },
          {
              path: 'inductors',
              component: InductorsComponent
          },
          {
              path: 'capacitors',
              component: CapacitorsComponent
          },
          {
              path: 'settings',
              component: SettingsComponent
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
