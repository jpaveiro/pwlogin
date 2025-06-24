import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RodapeComponent } from "../../components/rodape/rodape.component";

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, RodapeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
