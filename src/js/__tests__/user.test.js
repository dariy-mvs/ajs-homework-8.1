
import Magician from '../Magician';
import Daemon from '../Daemon';

test('Daemon', () => {
  const myDaemon = new Daemon('Daemon');
  myDaemon.attack = 100;
  myDaemon.stoned = true;
  myDaemon.distance = 2;
  expect(myDaemon.attack).toBe(85);
});

test('MathCharacter', () => {
  const myDaemon = new Daemon('Daemon');
  myDaemon.attack = 100;
  myDaemon.distance = 2;
  expect(myDaemon.attack).toBe(90);
});

test('Magician', () => {
  const myMagician = new Magician('Mag');
  myMagician.attack = 200;
  myMagician.stoned = true;
  myMagician.distance = 3;
  expect(myMagician.attack).toBe(152);
});
