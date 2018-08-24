import { Todo } from './todo/todo';
import { TodoTab } from './todo/tab/tab';
import { TodoTabItem } from './todo/tab/item/item';

export const TODOS: Todo[] = [
  new Todo(1, 'Shopping', [
      new TodoTab('Fruits', [
        new TodoTabItem('Apples'),
        new TodoTabItem('Bananas'),
        new TodoTabItem('Blueberries')
      ]),
      new TodoTab('Vegetables', [
        new TodoTabItem('Broccoli'),
        new TodoTabItem('Onions'),
        new TodoTabItem('Mushrooms')
      ]),
      new TodoTab('Bulk', [
        new TodoTabItem('Buckwheat'),
        new TodoTabItem('Farro'),
        new TodoTabItem('Steel Cut Oats')
      ])
    ]
  ),
  new Todo(2, 'Backpacking', [
      new TodoTab('Cooking', [
        new TodoTabItem('JetBoil'),
        new TodoTabItem('Fuel'),
        new TodoTabItem('Lighter'),
      ]),
      new TodoTab('Nutrition', [
        new TodoTabItem('Food'),
        new TodoTabItem('Water'),
        new TodoTabItem('Water Filter'),
        new TodoTabItem('Snacks')
      ]),
      new TodoTab('Sleep', [
        new TodoTabItem('Sleeping Mat'),
        new TodoTabItem('Sleeping Bag'),
        new TodoTabItem('Bag Liner')
      ]),
    ]
  ),
  new Todo(3, 'Gym', [
      new TodoTab('Stretching', [
        new TodoTabItem('Shoulder Extension'),
        new TodoTabItem('Underarm Shoulder Stretch'),
        new TodoTabItem('Rear Hand Squat'),
      ]),
      new TodoTab('Mobility', [
        new TodoTabItem('3 Plane Neck'),
        new TodoTabItem('Finger Flexion/Extension'),
        new TodoTabItem('Wrist Circles'),
      ]),
      new TodoTab('Lifting', [
        new TodoTabItem('Squats'),
        new TodoTabItem('Overhead Press'),
        new TodoTabItem('Deadlift'),
      ])
    ]
  ),
];
