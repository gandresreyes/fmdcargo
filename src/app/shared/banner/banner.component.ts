import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
    trigger('entrada',[
      state('void',style({
        transform:' translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(500,style({
          transform:' translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]

})
export class BannerComponent {
  now:number=0
  tamanoW:number = window.innerWidth;
 
  @ViewChild('plane') plane!:ElementRef
  constructor(private renderer2:Renderer2 ){}

  options: AnimationOptions = {
    path: './assets/world.json',    
  };


  styles: Partial<CSSStyleDeclaration> = {
    filter: 'brightness(0.5)',
    width: '1400px',
    height:'640px'
    
  };
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.now = window.scrollY    
    if(this.now){    
      if(( 4.2*this.now)<this.tamanoW){
        this.renderer2.setStyle(this.plane?.nativeElement,'transform' ,  'translate(' + (2.5 * this.now + 'px,'+ -0.5*  this.now + 'px)'))           
        this.renderer2.setStyle(this.plane?.nativeElement,'opacity' ,  (this.now)/190)  
      }   
    }
   
  }
 
}
