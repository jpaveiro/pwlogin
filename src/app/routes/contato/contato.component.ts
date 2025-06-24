import { Component } from '@angular/core';
import { RodapeComponent } from "../../components/rodape/rodape.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-contato',
  imports: [RodapeComponent, NavbarComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

}
