import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { FilmePrincipalComponent } from './home/filme-principal/filme-principal.component';
import { TesteComponent } from './teste/teste.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ListaFilmesComponent } from './home/lista-filmes/lista-filmes.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FilmePrincipalComponent,
    TesteComponent,
    HomePageComponent,
    ListaFilmesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
