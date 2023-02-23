import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorreosApiService } from 'src/app/servicios/correos-api.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  enviando:boolean = false;
  enviado:boolean = false;
  texto:string  = "Submit";
  constructor(private fb:FormBuilder,private apicorreo:CorreosApiService){}
  ngOnInit(): void {
    this.iniciaForm();
    window.scroll(0, 0)
  }
  formCorreo!:FormGroup;

  iniciaForm(){
    this.formCorreo=this.fb.group({
      nombres:['',[Validators.required,Validators.minLength(3)]],
      correo:['',[Validators.required,,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(7)]],
      subject:['',[Validators.required,Validators.minLength(5)]],
      mensaje:['',[Validators.required,Validators.minLength(5)]]

    })
  }
  validarNum(phone:string){
    this.formCorreo.controls[phone].valueChanges.subscribe((change:any)=>{
      var valor = change.replace(/[a-zA-Z]/g,'').trim();    
     
      this.formCorreo.get(phone)?.patchValue(valor,{emitEvent: false});
    });
  }
  get nombresNV(){
    return(
      this.formCorreo.get('nombres')?.invalid &&
      this.formCorreo.get('nombres')?.touched
    )
  }
  get correoNV(){
    return(
      this.formCorreo.get('correo')?.invalid &&
      this.formCorreo.get('correo')?.touched
    )
  }
  get phoneNV(){
    this.validarNum('phone');
    return(
      this.formCorreo.get('phone')?.invalid &&
      this.formCorreo.get('phone')?.touched
    )
  }
  get subjectNV(){
    return(
      this.formCorreo.get('subject')?.invalid &&
      this.formCorreo.get('subject')?.touched
    )
  }
  get mensajeNV(){
    return(
      this.formCorreo.get('mensaje')?.invalid &&
      this.formCorreo.get('mensaje')?.touched
    )
  }

  sendEmail(){
    if(this.formCorreo.invalid){
      return Object.values(this.formCorreo.controls).forEach((control) =>{
        control.markAllAsTouched();
      })
    }else{
      this.enviando=true
      this.texto= "Sending"
      this.apicorreo.sendMail(this.formCorreo.value).subscribe(  
        {
        next:(data:any) =>{          
          this.enviando = false
          this.formCorreo.reset();
          this.texto= "Submit"
          this.enviado=true

        },error:(error:any)=>{
          console.log(error)
          this.enviando = false
        }
      }
        
      )
      
    }

  }

}
