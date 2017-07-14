import { GlobalService, MenuService } from './theme/services';

import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuStatus: boolean = true;

  constructor(private globalService: GlobalService, private menu: MenuService) {
    globalService.pagesNavigated$
      .subscribe(page => this.menu.active(page));
  }

  ngOnInit() { }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }
}
