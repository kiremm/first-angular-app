import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
    imports: [HeaderComponent , User],
})
export class App {
  users = DUMMY_USERS;
}
