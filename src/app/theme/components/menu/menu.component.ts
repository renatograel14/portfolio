import { Component, OnInit } from '@angular/core';
import { GlobalService, MenuService } from "app/theme/services";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuHide: boolean = true;

  pagesList = [
    {
      id: 'exp',
      name: 'Experience',
      path: ['/exp']
    }, {
      id: 'skills',
      name: 'Skills',
      path: ['skills']
    }, {
      id: 'about',
      name: 'About me',
      path: ['']
    }, {
      id: 'contact',
      name: 'Contact me',
      path: ['']
    },
  ]

  constructor(private globalService: GlobalService, private menu: MenuService) {
    globalService.pagesNavigated$
      .subscribe(page => this.menu.active(page));
  }

  ngOnInit() { }

  toggleMenu() {
    this.menuHide = !this.menuHide;
  }
}
