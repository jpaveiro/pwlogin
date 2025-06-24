import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RodapeComponent } from "../../components/rodape/rodape.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, RodapeComponent, RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
