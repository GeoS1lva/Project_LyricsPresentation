import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) label!: string;
  @Input() routerLink: string = '';
  @Input() isCollapsed: boolean = false;
}