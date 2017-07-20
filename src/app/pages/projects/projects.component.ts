import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeinTransition } from "app/theme/animations/router.transition";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeinTransition()]
})
export class ProjectsComponent implements OnInit {

  @HostBinding('@fadeinTransition') routerTransition = true;

  constructor() { }

  ngOnInit() {
  }

}
