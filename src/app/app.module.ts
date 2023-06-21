import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'
import { RouterModule } from "@angular/router";

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BanderasComponent } from './shared/banderas/banderas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { BannerComponent } from './shared/banner/banner.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { AnimacionComponent } from './shared/animacion/animacion.component';
import { ServiciosComponent } from './shared/servicios/servicios.component';
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent, 
    FooterComponent,
    BanderasComponent,
    BannerComponent,
    AcercadeComponent,
    ContactenosComponent,
    AnimacionComponent,
    ServiciosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,  
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,     
    LottieModule.forRoot({ player: playerFactory }),
    RouterModule.forRoot([],
      {
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled'
      })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
