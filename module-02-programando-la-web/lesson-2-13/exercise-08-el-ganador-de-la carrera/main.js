'use strict';

console.log('Are you ready for a good time? :))');

const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
  ];
  
  const winner = runners.reduce((winnerRunner, runner) =>
    runner.time < winnerRunner.time ? runner : winnerRunner
  );
  
  console.log(winner);

  // También...
  
  const runners2 = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
  ];
  const theWinner = runners2.reduce((winner, runner) => {
    if (winner.time < runner.time) {
      return winner;
    } else {
      return runner;
    }
  });
  
  console.log(`8. El ganador es:`);
  console.log(theWinner);