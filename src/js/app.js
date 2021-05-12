import Daemon from './Daemon';

const myDaemon = new Daemon('Daemon');
myDaemon.attack = 100;
myDaemon.stoned = true;
myDaemon.distance = 2;
console.log(myDaemon.attack);
