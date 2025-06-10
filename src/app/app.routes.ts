import { Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/home.component';
import { CadastroComponent } from './routes/cadastro/cadastro.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home | JY3BI"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login | JY3BI"
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    title: "Cadastro | JY3BI"
  }
];
