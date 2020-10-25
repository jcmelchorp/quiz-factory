import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { ShellComponent } from './shell/shell.component';
const components = [
  ShellComponent
];

const modules = [CommonModule, RouterModule, MaterialModule]

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
