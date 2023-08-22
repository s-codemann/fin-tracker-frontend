import {
  keyframes,
  style,
  state,
  transition,
  trigger,
  animate,
} from '@angular/animations';

// export const enterAnimation = trigger('enter', [
//   state(
//     'closed',
//     style({
//       top: '-2000px',
//     })
//   ),
//   state(
//     'entered',
//     style({
//       top: '50%',
//     })
//   ),
//   transition('closed => entered', [animate('2s')]),
// ]);

export const enterAnimation = trigger('enter', [
  transition(':enter', [
    style({ opacity: 0.7, top: '30%' }),
    animate('300ms ease-out', style({ opacity: 1, top: '50%' })),
  ]),
  transition(':leave', [
    style({ opacity: 1, top: '50%' }),
    animate('200ms', style({ opacity: 0, top: '30%' })),
  ]),
]);
