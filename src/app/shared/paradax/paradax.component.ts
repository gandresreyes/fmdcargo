import { Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-paradax',
  templateUrl: './paradax.component.html',
  styleUrls: ['./paradax.component.css']
})
export class ParadaxComponent  implements OnInit {
  now:number=0
  @ViewChild('txt') txt!:ElementRef
  @ViewChild('nube1') nube1!:ElementRef
  @ViewChild('nube2') nube2!:ElementRef
  @ViewChild('plane') plane!:ElementRef
  @ViewChild('edificios') edificios!:ElementRef
  constructor(private renderer2:Renderer2){}
  ngOnInit(): void {

  }
 

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.now = window.scrollY    
    if(this.now){
      this.renderer2.setStyle(this.txt?.nativeElement,'margin-top' ,  this.now + 'px' )
      this.renderer2.setStyle(this.plane?.nativeElement,'margin-bottom' , 0.8*  this.now + 'px' )
      this.renderer2.setStyle(this.plane?.nativeElement,'margin-left' , 2.5 * this.now + 'px' )
      this.renderer2.setStyle(this.nube1?.nativeElement,'margin-top' , 0.5 * this.now + 'px' )
      this.renderer2.setStyle(this.nube1?.nativeElement,'margin-right' , 0.5 * this.now + 'px' )
      this.renderer2.setStyle(this.nube2?.nativeElement,'margin-right' , 0.6 * this.now + 'px' )
      this.renderer2.setStyle(this.edificios?.nativeElement,'margin-bottom' , -0.8 * this.now + 'px' )

    }
   
  }

}
