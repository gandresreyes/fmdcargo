import { Component,  OnInit,  } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  implements OnInit  {
  options: AnimationOptions = {
    path: '/assets/lottie/world.json',    
  };   
  ngOnInit(): void {    
   
  } 
  
  
 
}
