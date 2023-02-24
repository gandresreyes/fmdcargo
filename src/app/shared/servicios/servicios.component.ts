import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2, HostListener } from '@angular/core';
declare var window:any

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent  implements OnInit, AfterViewInit {
  @ViewChild('slide') slide!:ElementRef
  @ViewChild('ref') ref!:ElementRef
  pos:number = 0
  pantalla:number = 0;
  pasos:number = 6;
  paso:number = 0;
  constructor(private renderer2:Renderer2){}
 
  ngOnInit(): void { 
    
  }
  ngAfterViewInit(): void {   
    if(screen.width < 768){
      this.pasos = 6

    }else if((screen.width < 992)) {
      this.pasos = 5
    }
    this.pantalla=this.ref.nativeElement.clientWidth ;  
   
    setInterval(()=>{
      this.animacion()
    },2000)
    
  }
  animacion(){ 
    this.renderer2.setStyle(this.slide.nativeElement,'transform', 'translate('+(this.pos)+'px)') 
    this.renderer2.setStyle(this.slide.nativeElement,'transition', '0.5s all')       
    this.paso+= 1;
    this.pos = -1*(this.pantalla*this.paso)
    if(this.paso>this.pasos){  
      this.paso=0
      this.pos = 0 
      this.renderer2.setStyle(this.slide.nativeElement,'transform', 'translate(0px)') 
      this.renderer2.setStyle(this.slide.nativeElement,'transition', '2s all')          
    }    
  } 
  
  @HostListener('window:resize',['$event'])
  onResize(e:any){       
    this.pantalla=this.ref.nativeElement.clientWidth
    if(screen.width < 768){
      this.pasos = 6

    }else if((screen.width < 992)) {
      this.pasos = 5
    }else  this.pasos = 4
     
  }
  
}
