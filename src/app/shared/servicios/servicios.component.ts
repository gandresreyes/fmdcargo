import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent  implements  AfterViewInit {
  @ViewChild('slide') slide!:ElementRef
  @ViewChild('ref') ref!:ElementRef
  pos:number = 0
  pantalla:number = 0;
  constructor(private renderer2:Renderer2){}
 
  ngAfterViewInit(): void {    
    setInterval(()=>{
      this.animacion()
    },3500)    
  }
  animacion(){ 
    this.pantalla=this.ref.nativeElement.clientWidth ;  
    let first = this.slide.nativeElement.firstChild
    this.renderer2.setStyle(this.slide.nativeElement,'transform', 'translate('+(-this.pantalla)+'px)') 
    this.renderer2.setStyle(this.slide.nativeElement,'transition', '0.5s all')      
    
    setTimeout(() => {
      
      this.renderer2.appendChild(this.slide.nativeElement,first) 
      this.renderer2.setStyle(this.slide.nativeElement,'transition', 'none')  
      this.renderer2.setStyle(this.slide.nativeElement,'transform', 'translate('+(0)+'px)') 
    }, 500);   
      
  } 
  
}
