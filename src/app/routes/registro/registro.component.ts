import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { RodapeComponent } from "../../components/rodape/rodape.component";

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, NavbarComponent, RodapeComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  registroForm: FormGroup;
    constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      emailGroup: this.fb.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        confirmacaoEmail: ['', [
          Validators.required
        ]]
      },
      { validators: this.mesmoEmailValidator }
    ),
      senhaGroup: this.fb.group({
        senha: ['', [
          Validators.required,
          Validators.minLength(8)
        ]],
        confirmacaoSenha: ['', [
          Validators.required
        ]]
      },
      { validators: this.mesmaSenhaValidator }
    )
    });
  }

  mesmaSenhaValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    let senha = formGroup.get('senha')?.value;
    let confirmacaoSenha = formGroup.get('confirmacaoSenha')?.value;

    if (senha != confirmacaoSenha) {
      return { senhasDiferentes: true };
    }
    return null;
  }

  mesmoEmailValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    let email = formGroup.get('email')?.value;
    let confirmacaoEmail = formGroup.get('confirmacaoEmail')?.value;

    if (email != confirmacaoEmail) {
      return { emailsDiferentes: true };
    }
    return null;
  }

  onSubmit() : void {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
      alert("Registrado!");
      return;
    }
    this.registroForm.markAllAsTouched();
  }
}
