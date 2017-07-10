import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../theme/animations/router.transition';

@Component({
    selector: 'welcome',
    templateUrl: 'welcome.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class WelcomeComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}