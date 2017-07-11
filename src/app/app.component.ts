import { GlobalService } from './theme/services/global.service';

import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuStatus: boolean = true;

  constructor(private globalService: GlobalService) {
    globalService.pages$
      .subscribe(page => {
        let listMenu: HTMLElement = document.getElementById('listMenu');

        for (let i = 0; i < listMenu.children.length; i++) {
          listMenu.children.item(i).classList.remove('active');
        }

        let itemMenu: HTMLElement = listMenu.children[page];
        if (itemMenu) {
          itemMenu.classList.add('active');
        }
      });
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }
}
