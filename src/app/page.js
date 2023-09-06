import Image from "next/image";
import { getMoves, addMove } from "./moves";

export default async function Home() {
    await addMove("123", { x: 1, y: 2 });
    console.log(await getMoves());

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                AZULE GAME GOES HERE!
            </div>
        </main>
    );
}
