import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';

const routes: Routes = [
  {path:'',title:'Home | Fmd' ,component:InicioComponent},
  {path:'about',title:'about us | Fmd' ,component:AcercadeComponent},
  {path:'contact',title:'contact | Fmd' ,component:ContactenosComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
