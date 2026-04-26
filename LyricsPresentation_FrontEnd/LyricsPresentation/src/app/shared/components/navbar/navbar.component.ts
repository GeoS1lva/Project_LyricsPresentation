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
    { icon: 'home', label: 'Painel Principal', path: '/home' },
    { icon: 'music_note', label: 'Preparação de Hinos', path: '/preparacao' },
    { icon: 'menu_book', label: 'Biblioteca de Hinos', path: '/biblioteca' },
    { icon: 'group', label: 'Membros', path: '/membros' },
    { icon: 'history', label: 'Histórico', path: '/historico' },
    { icon: 'settings', label: 'Configurações', path: '/configuracoes' }
  ];

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}