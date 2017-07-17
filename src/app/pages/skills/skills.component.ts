import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeinTransition } from 'app/theme/animations/router.transition';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [fadeinTransition()]
})
export class SkillsComponent implements OnInit {
  
  @HostBinding('@fadeinTransition') routerTransition = true;
  
  clickState = 'default'
  hoverState = 'default'
  constructor() { }

  ngOnInit() {
  }

}
