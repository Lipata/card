import { employees } from './employees';

export const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const birthdays = [
  { date: new Date(2019, 0, 1), birthdays: [
    { id: 1, name: 'Steve Harris', birthday: new Date(1985, 0, 9),
    photo: 'https://randomuser.me/api/portraits/men/1.jpg', present: true, kudos: 45, check: true, reason: 'cake' }]},
  { date: new Date(2019, 1, 1), birthdays: [
    { id: 2, name: 'Ronnie James Dio', birthday: new Date(1985, 1, 9),
    photo: 'https://randomuser.me/api/portraits/men/2.jpg', present: false, kudos: 42, check: true, reason: 'cake' }]},
  { date: new Date(2019, 2, 1), birthdays: [
    { id: 3, name: 'Adam Jones', birthday: new Date(1985, 2, 1),
    photo: 'https://randomuser.me/api/portraits/men/3.jpg', present: true, kudos: 45, check: true, reason: 'child_friendly' },
    { id: 4, name: 'Danny Carey', birthday: new Date(1985, 2, 9),
    photo: 'https://randomuser.me/api/portraits/men/4.jpg', present: false, kudos: 20, check: true, reason: 'directions_run' },
    { id: 5, name: 'Justin Chancellor', birthday: new Date(1985, 2, 25),
    photo: 'https://randomuser.me/api/portraits/men/5.jpg', present: true, kudos: 15, check: false, reason: 'cake' },
    { id: 6, name: 'Maynard James Keenan', birthday: new Date(1985, 2, 27),
    photo: 'https://randomuser.me/api/portraits/men/6.jpg', present: true, kudos: 7, check: false, reason: 'cake' }]},
  { date: new Date(2019, 3, 1), birthdays: [
    { id: 7, name: 'Ivo Papazov', birthday: new Date(1985, 3, 9),
    photo: 'https://randomuser.me/api/portraits/men/7.jpg', present: true, kudos: 20, check: false, reason: 'cake' }]}
];
