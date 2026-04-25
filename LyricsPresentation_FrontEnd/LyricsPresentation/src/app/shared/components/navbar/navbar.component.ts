import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from '../nav-button/nav-button.component';
  
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems = [
    { label: 'Início', active: true },
    { label: 'Letras', active: false },
    { label: 'Apresentações', active: false },
    { label: 'Configurações', active: false }
  ];
}