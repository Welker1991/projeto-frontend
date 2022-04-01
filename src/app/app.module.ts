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
import { CreateDesktopComponent } from './create-desktop/create-desktop.component';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { CreateCelularComponent } from './create-celular/create-celular.component';
import { CreateTabletComponent } from './create-tablet/create-tablet.component';
import { UpdateTotemComponent } from './update-totem/update-totem.component';
import { UpdateDesktopComponent } from './update-desktop/update-desktop.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { UpdateCelularComponent } from './update-celular/update-celular.component';
import { UpdateTabletComponent } from './update-tablet/update-tablet.component';

const routes: Routes = [
  { path: 'cadastrar-totem', component: CreateTotemComponent },
  { path: 'listar-totem', component: TotemsAppComponent },
  { path: 'cadastrar-desktop', component: CreateDesktopComponent },
  { path: 'listar-desktop', component: DesktopComponent },
  { path: 'cadastrar-laptop', component: CreateLaptopComponent },
  { path: 'listar-laptop', component: LaptopComponent },
  { path: 'cadastrar-celular', component: CreateCelularComponent },
  { path: 'listar-celular', component: CelularComponent },
  { path: 'cadastrar-tablet', component: CreateTabletComponent },
  { path: 'listar-tablet', component: TabletComponent },
  { path: 'atualizar-totem', component: UpdateTotemComponent },
  { path: 'atualizar-desktop', component: UpdateDesktopComponent },
  { path: 'atualizar-laptop', component: UpdateLaptopComponent },
  { path: 'atualizar-celular', component: UpdateCelularComponent },
  { path: 'atualizar-tablet', component: UpdateTabletComponent }

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
    CreateTotemComponent,
    CreateDesktopComponent,
    CreateLaptopComponent,
    CreateCelularComponent,
    CreateTabletComponent,
    UpdateTotemComponent,
    UpdateDesktopComponent,
    UpdateLaptopComponent,
    UpdateCelularComponent,
    UpdateTabletComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [HttpClientModule, TotemService, UpdateTotemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
