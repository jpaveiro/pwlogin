import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, NavbarComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      emails: this.fb.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        confirmarEmail: ['',
          Validators.required
        ]
      },
      { validators: this.mesmoEmailValidator }
    ),
      senhas: this.fb.group({
        senha: ['', [
          Validators.required,
          Validators.minLength(8),
        ]],
        confirmarSenha: ['',
          Validators.required,
        ]
      },
      { validators: this.mesmaSenhaValidator, }
    )});
  }

  onSubmit() : void {
    if (this.form.valid) {
      console.log(this.form.value);
      alert("Formulário enviado com sucesso!");
      return;
    }
    this.form.markAllAsTouched();
  }

  // Dá pra simplificar em um método só :P
  mesmaSenhaValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    let senha = formGroup.get('senha')?.value;
    let confirmarSenha = formGroup.get('confirmarSenha')?.value;

    if (senha != confirmarSenha) {
      return { senhasDiferentes: true };
    }
    return null;
  }

  mesmoEmailValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    let email = formGroup.get('email')?.value;
    let confirmarEmail = formGroup.get('confirmarEmail')?.value;

    if (email != confirmarEmail) {
      return { emailsDiferentes: true };
    }
    return null;
  }
}
