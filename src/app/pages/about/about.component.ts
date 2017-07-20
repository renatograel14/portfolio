import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeinTransition } from 'app/theme/animations/router.transition';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeinTransition()]

})
export class AboutComponent implements OnInit {
  @HostBinding('@fadeinTransition') routerTransition = true;

  constructor() { }

  ngOnInit() {
  }

}
