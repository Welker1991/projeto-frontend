import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { TotemsAppComponent } from './components/totems-app/totems-app.component';
import { FilterComponent } from './components/totems-app/filter/filter.component';
import { TotemService } from './components/totems-app/totems-app.component.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TotemsCreateComponent } from './totems-create/totems-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TotemsAppComponent,
    FilterComponent,
    TotemsCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, TotemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
