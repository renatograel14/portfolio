import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeinTransition } from '../../theme/animations/router.transition';
import { GlobalService } from '../../theme/services/global.service';

@Component({
    selector: 'experience',
    templateUrl: 'experience.component.html',
    styleUrls: ['experience.component.scss'],
    animations: [fadeinTransition()]
})


export class ExperienceComponent implements OnInit {
    constructor(private globalService: GlobalService) { }
    @HostBinding('@fadeinTransition') routerTransition = true;

    ngOnInit() {
        this.globalService.pageChanged('exp');
    }
}