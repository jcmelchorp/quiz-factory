import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { ShellComponent } from './shell/shell.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
const components = [
  ShellComponent, DashboardComponent, DeleteButtonComponent
];

const modules = [CommonModule, RouterModule, MaterialModule];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules
  ],
})

export class SharedModule { }
