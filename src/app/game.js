import { getGames } from "./moves";

function Move(props) {
    const { move } = props;
    const { x, y } = move;
    const left = x * 32;
    const top = y * 32;

    return (
        <div className="absolute w-16 h-16 bg-white text-red-500" style={{ left, top }}>
            Move: {x}, {y}
        </div>
    );
}

export default async function Game() {
    const games = await getGames();
    const moves = games["123"];

    return (
        <div className="absolute w-96 h-96 top-0 left-0">
            {moves.map((move, idx) => (
                <Move key={idx} move={move} />
            ))}
        </div>
    );
}
