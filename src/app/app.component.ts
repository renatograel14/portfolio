import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuStatus: boolean = true;

  currentPage(page : Element){
    console.log(page.innerHTML);
    return false;
  }  

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }
}
