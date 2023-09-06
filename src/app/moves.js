"use server";

/**
 * @type {Record<string, any[]>}
 */
const games = {
    '123': [
        { x: 1, y: 2 },
    ]
};

export async function addMove(gameId, move) {
    if (!games[gameId]) {
        games[gameId] = [];
    }
    
    games[gameId].push(move);
}

export async function getGames() {
  return games;
}
