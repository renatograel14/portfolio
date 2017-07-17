import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeinTransition } from '../../theme/animations/router.transition';

@Component({
    selector: 'welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    animations: [fadeinTransition()],
})

export class WelcomeComponent implements OnInit {
    @HostBinding('@fadeinTransition') routerTransition = true;

    constructor() { }
    ngOnInit() { }
}