import Image from "next/image";
import Game from "./game";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
              <Game />
            </div>
        </main>
    );
}
