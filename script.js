import { Position } from "./position.js";

let board = [];
for (let i = 0; i <= 7; i++) {
	board[i] = [];
	for (let j = 0; j <= 7; j++) {
		board[i][j] = new Position(i, j);
	}
}
for (let i = 0; i <= 7; i++) {
	for (let j = 0; j <= 7; j++) {
		board[i][j].moves = getPossibleMoves(board[i][j]);
	}
}

function getPossibleMoves(position) {
	let moves = [];
	if (position.x + 2 <= 7) {
		if (position.y + 1 <= 7)
			moves.push(board[position.x + 2][position.y + 1]);
		if (position.y - 1 >= 0)
			moves.push(board[position.x + 2][position.y - 1]);
	}
	if (position.x - 2 >= 0) {
		if (position.y + 1 <= 7)
			moves.push(board[position.x - 2][position.y + 1]);
		if (position.y - 1 >= 0)
			moves.push(board[position.x - 2][position.y - 1]);
	}
	if (position.y + 2 <= 7) {
		if (position.x + 1 <= 7)
			moves.push(board[position.x + 1][position.y + 2]);
		if (position.x - 1 >= 0)
			moves.push(board[position.x - 1][position.y + 2]);
	}
	if (position.y - 2 >= 0) {
		if (position.x + 1 <= 7)
			moves.push(board[position.x + 1][position.y - 2]);
		if (position.x - 1 >= 0)
			moves.push(board[position.x - 1][position.y - 2]);
	}
	return moves;
}

function knightMoves(start, destination) {
	start = board[start[0]][start[1]];
	destination = board[destination[0]][destination[1]];
	let queue = [start];
	start.visited = true;
	while (queue.length > 0) {
		let current = queue.shift();

		if (current.x === destination.x && current.y === destination.y) {
			let path = [];
			while (current) {
				path.push([current.x, current.y]);
				current = current.parent;
			}
			path.reverse();
			return path;
		}
		for (let move of current.moves) {
			if (!move.visited) {
				move.visited = true;
				move.parent = current;
				queue.push(move);
			}
		}
	}
}

console.log(knightMoves([0, 0], [7, 7]));
