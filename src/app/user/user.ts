import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})

export class User {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return '/users/' + this.avatar;
  }

  onSelectUser() {}
}
