import { animate, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const slideRightLeftAnimation =
  trigger('routeAnimation', [
    state('*',
      style({ transform: 'translateX(0)' })
    ),
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.2s ease-out', style({ transform: 'translatex(-100%)' }))
    ])
  ]);

export const slideLeftRightAnimation =
  trigger('routeAnimation', [
    state('*',
      style({ transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateX(100%)'}),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.2s ease-in', style({ transform: 'translateX(100%)'}))
    ]),
  ]);
