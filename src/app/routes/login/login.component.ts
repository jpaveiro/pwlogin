import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { RodapeComponent } from "../../components/rodape/rodape.component";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NavbarComponent, RouterModule, RodapeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
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
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      alert("Logado!");
      return;
    }
    this.loginForm.markAllAsTouched();
  }
}
