import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './layout/header/header.component';
import { ParadaxComponent } from './shared/paradax/paradax.component';
import { MundoComponent } from './shared/mundo/mundo.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BanderasComponent } from './shared/banderas/banderas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    ParadaxComponent,
    MundoComponent,
    FooterComponent,
    BanderasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
