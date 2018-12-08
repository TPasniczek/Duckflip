/* every game has two players, identified by their WebSocket */
var game = function (gameID) {
    this.playerA = null;
    this.playerB = null;
    this.id = gameID;
    this.codeToGuess = null; //first player to join the game, can set the code
    this.gameState = "0 JOINED"; //"A" means A won, "B" means B won, "ABORTED" means the game was aborted
};

/*
 * The game can be in a number of different states.
 */
game.prototype.transitionStates = {};
game.prototype.transitionStates["0 JOINED"] = 0;
game.prototype.transitionStates["1 JOINED"] = 1;
game.prototype.transitionStates["2 JOINED"] = 2;
game.prototype.transitionStates["COLOR+PLACE GUESSED"] = 3;
game.prototype.transitionStates["COLOR GUESSED"] = 4;
game.prototype.transitionStates["A"] = 5; //A won
game.prototype.transitionStates["B"] = 6; //B won
game.prototype.transitionStates["ABORTED"] = 7;

/*
*here there should be the transition matrix but i have no idea how it works
*/

