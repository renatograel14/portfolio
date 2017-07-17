import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const fadeinTransition = () => {

  return trigger('fadeinTransition', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('500ms ease-in')
    ]),
    transition(':leave', [
      animate('300ms ease-out', keyframes([
        style({
          opacity: 0,
        })
      ]))
    ])
  ]);
}