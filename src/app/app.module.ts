import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleComponent } from './app.component';
import { LeftMenuComponent } from './leftmenu/leftmenu.component';
import { RightMenuComponent } from './rightmenu/rightmenu.component';
import { CentralComponent } from './central/central.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SimpleComponent,
    LeftMenuComponent,
    RightMenuComponent,
    CentralComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SimpleComponent]
})
export class AppModule {
}
