import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberListComponent } from './number-list/number-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NumberListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NumberListComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
