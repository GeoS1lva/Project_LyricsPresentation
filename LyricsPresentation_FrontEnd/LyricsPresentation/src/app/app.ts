import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
// ... outros imports

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.html',
})
export class AppComponent { }