import { Component,  OnInit,  } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  implements OnInit  {
  options: AnimationOptions = {
    path: './assets/world.json',    
  };   
  ngOnInit(): void {   
    window.scroll(0, 0) 
   
  } 
  
  
 
}
