import { Component, OnInit } from '@angular/core';
import { GlobalService, MenuService } from "app/theme/services";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
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
