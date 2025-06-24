import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { RegistroComponent } from './routes/registro/registro.component';
import { SobreComponent } from './routes/sobre/sobre.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ContatoComponent } from './routes/contato/contato.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', title: 'Redirecionando...', redirectTo: 'home' },
    { path: 'home', title: 'Início', component: HomeComponent },
    { path: 'login', title: 'Login', component: LoginComponent },
    { path: 'registro', title: 'Registro', component: RegistroComponent },
    { path: 'sobre', title: 'Sobre nós', component: SobreComponent },
    { path: 'contato', title: 'Contato', component: ContatoComponent },
    { path: 'admin/dashboard', title: 'Dashboard', component: DashboardComponent }
];
