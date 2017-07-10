import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../theme/animations/router.transition';

@Component({
    selector: 'experience',
    templateUrl: 'experience.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})


export class ExperienceComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}