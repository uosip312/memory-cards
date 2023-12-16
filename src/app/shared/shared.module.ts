import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberListComponent } from './number-list/number-list.component';



@NgModule({
  declarations: [
    NumberListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberListComponent
  ]
})
export class SharedModule { }
