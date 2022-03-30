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
import { CelularComponent } from './celular/celular.component';
import { TabletComponent } from './tablet/tablet.component';
import { DesktopComponent } from './desktop/desktop.component';
import { LaptopComponent } from './laptop/laptop.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { CreateTotemComponent } from './create-totem/create-totem.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cadastrar', component: CreateTotemComponent },
  { path: 'listar', component: TotemsAppComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TotemsAppComponent,
    FilterComponent,
    CelularComponent,
    TabletComponent,
    DesktopComponent,
    LaptopComponent,
    CreateTotemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClientModule, TotemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
