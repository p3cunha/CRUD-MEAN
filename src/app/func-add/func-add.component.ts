import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-func-add',
  templateUrl: './func-add.component.html',
  styleUrls: ['./func-add.component.css']
})
export class FuncAddComponent implements OnInit {

  form: FormGroup

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3) ]],
      profissao: ['', [Validators.required]],
      id: ['', [Validators.required]]
    })
  }

  onSubmit(){
    if (this.form.valid){
    console.log(this.form)
    }
  }

  bootstrapInvalid(campo){ // return if input isn't valid and was touched
  return !this.form.get(campo).valid && this.form.get(campo).touched 
}
bootstrapValid(campo){ // return if input is valid
  return this.form.get(campo).valid
}
}
