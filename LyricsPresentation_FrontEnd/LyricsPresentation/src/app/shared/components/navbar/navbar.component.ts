import { Component } from '@angular/core';
import { NavButtonComponent } from '../nav-button/nav-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = false;

  menuItems = [
    { icon: 'home', label: 'Painel Principal', active: false },
    { icon: 'music_note', label: 'Preparação de Hinos', active: true },
    { icon: 'menu_book', label: 'Biblioteca de Hinos', active: false },
    { icon: 'group', label: 'Membros', active: false },
    { icon: 'history', label: 'Histórico', active: false },
    { icon: 'settings', label: 'Configurações', active: false }
  ];

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}