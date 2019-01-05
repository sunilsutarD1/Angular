import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent,FooterComponent,LayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[LayoutComponent]
})
export class UiModule { }
