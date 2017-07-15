import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    constructor() { }

    active(page: string) {
        let listMenu: HTMLElement = document.getElementById('listMenu');

        if (listMenu) {
            for (let i = 0; i < listMenu.children.length; i++) {
                listMenu.children.item(i).classList.remove('active');
            }

            let itemMenu: HTMLElement = listMenu.children[page];
            if (itemMenu) {
                itemMenu.classList.add('active');
            }
        }
    }
}