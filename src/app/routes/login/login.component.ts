import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../../components/navbar/navbar.component";


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      senha: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
    });
  }

  onSubmit() : void {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      alert("Formulário enviado com sucesso!");
      return;
    }
    this.formulario.markAllAsTouched();
  }
}
