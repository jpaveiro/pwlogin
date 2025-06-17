import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', title: 'Redirecionando...', redirectTo: 'home' },
    { path: 'home', title: 'Início', component: HomeComponent },
    { path: 'login', title: 'Login', component: LoginComponent }
];
