import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatChipsModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule
 } from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule
  ],
  exports: [
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule
  ],
})
export class MaterialExporterModule { }
