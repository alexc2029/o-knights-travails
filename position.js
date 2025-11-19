export class Position {
	x = null;
	y = null;
	visited = false;
	parent = null;
	moves = [];
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
