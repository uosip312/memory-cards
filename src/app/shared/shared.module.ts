import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberListComponent } from './number-list/number-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NumberListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NumberListComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
