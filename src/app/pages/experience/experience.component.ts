import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../theme/animations/router.transition';
import { GlobalService } from '../../theme/services/global.service';

@Component({
    selector: 'experience',
    templateUrl: 'experience.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})


export class ExperienceComponent implements OnInit {
    constructor(private globalService: GlobalService) { }

    ngOnInit() {
        this.globalService.pageChanged('exp');
    }
}