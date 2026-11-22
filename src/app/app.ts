import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
@Component({
  imports: [RouterOutlet, HeaderComponent],
  selector: 'app-root',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class App {
  protected readonly title = signal('first-angular-app');
}
