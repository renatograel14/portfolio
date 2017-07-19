import { GlobalService, MenuService } from './theme/services';

import { Component, ElementRef, HostListener } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuStatus: boolean = true;
  scrollStatus;

  constructor(private globalService: GlobalService, private menu: MenuService) {
    globalService.pagesNavigated$
      .subscribe(page => this.menu.active(page));
  }

  ngOnInit() { }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.scrollStatus = event.target.scrollingElement.scrollTop;
  }
}
