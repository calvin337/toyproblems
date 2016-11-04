// Given an array of players (objects), return the names of all players that have a score above 100.
//
// DO NOT use .filter() in your solution.
//
// DO use a for loop.
//
// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

function topPlayers (players) {
  let greatPlayers = [];
  players.forEach(player => {
    if(player.score > 100)
      greatPlayers.push(player.name);
  });
  return greatPlayers;
}
