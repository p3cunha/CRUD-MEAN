import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { Funcionario } from '../Funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-func-add',
  templateUrl: './func-add.component.html',
  styleUrls: ['./func-add.component.css']
})
export class FuncAddComponent implements OnInit {

  form: FormGroup
  func: Funcionario

  constructor( private formBuilder: FormBuilder,
              private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3) ]],
      profissao: ['', [Validators.required ]],
      id: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6)]]
    })
  }

  onSubmit(nome, profissao, id){
    if (this.form.valid){
    console.log(this.form)
    this.addFuncionario(nome, profissao, id)
    }
  }

bootstrapInvalid(campo){ // return if input isn't valid and was touched
  return !this.form.get(campo).valid && this.form.get(campo).touched 
}
bootstrapValid(campo){ // return if input is valids
  return this.form.get(campo).valid
}

cssValidInvalid(campo){ // return string that will modify input class
    if (this.bootstrapInvalid(campo)){
     return  'is-invalid'} // class that will change css to invalid
    else if (this.bootstrapValid(campo)){
      return 'is-valid' } // class that will change css to valid
  }

  addFuncionario(nome, profissao, id){
    this.funcionarioService.addFuncionario(nome, profissao, id)
  }
}
