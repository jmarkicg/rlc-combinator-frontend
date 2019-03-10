import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import {RlcTableComponent} from "./rlc-table/rlc-table.component";

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule
    ],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule {}
