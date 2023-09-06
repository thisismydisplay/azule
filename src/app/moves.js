"use server";

/**
 * @type {Record<string, any[]>}
 */
const moves = {};

export async function addMove(gameId, move) {
    if (!moves[gameId]) {
        moves[gameId] = [];
    }
    
    moves[gameId].push(move);
}

export async function getMoves() {
  return moves;
}
