import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) label!: string;
  @Input() isActive: boolean = false;
  @Input() isCollapsed: boolean = false;
}