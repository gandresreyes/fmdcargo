import { state, style, transition, trigger,animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css'],
  
})
export class AcercadeComponent  implements OnInit{
  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
