import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ListaIngresosComponent } from './components/lista-ingresos/lista-ingresos.component';
import { ListaGastosComponent } from './components/lista-gastos/lista-gastos.component';
import { addIngresoComponent } from './components/lista-ingresos/add/add-ingreso.component';
import { addGastoComponent } from './components/lista-gastos/add/add-gasto.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListaIngresosComponent,
    ListaGastosComponent,
    addGastoComponent,
    addIngresoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
