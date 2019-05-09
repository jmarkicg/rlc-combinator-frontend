import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {SettingsComponent} from "./components/settings/settings.component";

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
        MatCardModule,
    ],
    declarations: [LayoutComponent, TopnavComponent, SidebarComponent, SettingsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule {}
