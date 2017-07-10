import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuStatus: boolean = true;

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
    console.log(this.menuStatus);
 }
}
