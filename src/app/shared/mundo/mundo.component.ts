import {  AfterViewInit, Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import createGlobe from "cobe";

@Component({
  selector: 'app-mundo',
  templateUrl: './mundo.component.html',
  styleUrls: ['./mundo.component.css']
})
export class MundoComponent implements OnInit, AfterViewInit{
  @ViewChild('canvas') canvas!:ElementRef ;
  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.word();
    
  }
 
  
  async word(){
    let canvas = this.canvas?.nativeElement
    let phi = 0 
    const globe =  await createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1800,
      height: 1800,
      phi: 0,
      theta: -50,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0, 0, 1],
      glowColor: [1, 1, 1],
      offset: [0, 0],
      opacity:0.8,
      markers: [              
        { location: [4.3556, -74.0451], size: 0.1 },//bogota
        { location: [25.7751, -80.2105], size: 0.1 },//miami
        
      ],      
        onRender: (state) => {      
        state['phi'] = phi
        phi += 0.01        
      },
    });
  }
 

}
