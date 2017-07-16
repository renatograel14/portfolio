import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('clickTrigger', [
      state('default', style({
        backgroundColor: 'deepskyblue',
        transform: 'scale(1)'
      })),
      state('clicked', style({
        transform: 'scale(.9)'
      })),
      transition('default <=> clicked', [
        animate(300)
      ])
    ]),
    trigger('hoverTrigger', [
      state('default', style({
        transform: 'scale(1)'
      })),
      state('hovered', style({
        transform: 'scale(1.1)'
      })),
      transition('default <=> hovered', [
        animate(300)
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  clickState = 'default'
  hoverState = 'default'
  constructor() { }

  ngOnInit() {
  }

}
